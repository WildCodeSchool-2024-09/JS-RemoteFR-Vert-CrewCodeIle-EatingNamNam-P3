export const recipeValidation = {
  title: {
    required: "Veuillez remplir ce champ",
    minLength: {
      value: 3,
      message: "Ce champ doit contenir au minimum 3 caractères",
    },
    maxLength: {
      value: 60,
      message: "Ce champ doit contenir maximum 60 caractères",
    },
  },
  summary: {
    required: "Veuillez remplir ce champ",
    minLength: {
      value: 40,
      message: "Ce champ doit contenir au minimum 40 caractères",
    },
    maxLength: {
      value: 255,
      message: "Ce champ doit contenir maximum de 255 caractères",
    },
  },
  quantity: {
    min: {
      value: 0.1,
      message: "Quantité minimum : 0,1",
    },
    max: {
      value: 1000,
      message: "Quantité maximum : 1 000",
    },
  },
  prep_time: {
    required: "Veuillez remplir ce champ",
  },
  step_order: {
    min: {
      value: 1,
      message: "Les étapes doivent être supérieures à 1",
    },
    max: {
      value: 21,
      message: "Le nombre d'étapes ne peut pas dépasser 21",
    },
  },
  content: {
    required: "Veuillez remplir ce champ",
    minLength: {
      value: 10,
      message: "Les instructions doivent contenir un minimum de 10 caractères",
    },
    maxLength: {
      value: 400,
      message: "Les instructions doivent contenir un maximum de 400 caractères",
    },
  },
};
