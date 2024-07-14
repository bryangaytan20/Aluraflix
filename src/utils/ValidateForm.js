export const validateForm = async (formData) => {
    const errors = {};

    const trimmedFormData = Object.keys(formData).reduce((acc, key) => {
        acc[key] = formData[key] ? formData[key].toString().trim() : '';
        return acc;
    }, {});

    if (!trimmedFormData.title) {
        errors.title = 'Debes proporcionar un título.';
    } else if (trimmedFormData.title.length < 3) {
        errors.title = 'El título necesita al menos 3 caracteres.';
    } else if (trimmedFormData.title.length > 200) {
        errors.title = 'El título no puede superar los 200 caracteres.';
    }

    if (!trimmedFormData.category) {
        errors.category = 'Selecciona un equipo, por favor.';
    }

    if (!trimmedFormData.photo) {
        errors.photo = 'Debes proporcionar una foto.';
    } else if (!isPhotoURLValid(trimmedFormData.photo)) {
        errors.photo = 'La URL de la imagen no es válida.';
    }

    if (!trimmedFormData.link) {
        errors.link = 'Debes proporcionar un video.';
    } else if (!isVideoURLValid(trimmedFormData.link)) {
        errors.link = 'La URL del video no es válida.';
    }

    if (!trimmedFormData.description) {
        errors.description = 'Debes proporcionar una descripción.';
    } else if (trimmedFormData.description.length < 10) {
        errors.description = 'La descripción necesita al menos 10 caracteres.';
    } else if (trimmedFormData.description.length > 500) {
        errors.description = 'La descripción no puede superar los 500 caracteres.';
    }

    return errors;
};

const isPhotoURLValid = (url) => {
    const photoUrlPattern = /\.(jpg|jpeg|png|gif)$/i;
    return photoUrlPattern.test(url);
};

const isVideoURLValid = (url) => {
    const videoUrlPattern = /^https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+\?si=[a-zA-Z0-9_-]+$/;
    return videoUrlPattern.test(url);
};
