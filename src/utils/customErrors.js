export const errorTypes = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
];

export const validationMessages = {
    title: {
        valueMissing: "Debes proporcionar un título.",
        tooShort: "El título necesita al menos 3 caracteres.",
    },
    category: {
        valueMissing: "Selecciona un equipo, por favor.",
    },
    photo: {
        valueMissing: "Debes proporcionar una foto.",
        typeMismatch: "La URL de la imagen no es válida.",
        tooShort: "La URL de la foto debe tener al menos 3 caracteres.",
    },
    link: {
        valueMissing: "Debes proporcionar un video.",
        typeMismatch: "La URL del video no es válida.",
        tooShort: "La URL del video debe tener al menos 3 caracteres.",
    },
    description: {
        valueMissing: "Debes proporcionar una descripción.",
        tooShort: "La descripción necesita al menos 10 caracteres.",
    },
};

