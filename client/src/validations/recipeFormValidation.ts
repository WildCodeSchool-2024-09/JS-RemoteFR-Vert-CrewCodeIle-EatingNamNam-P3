export const recipeValidation = {
  title: {
    required: "Ce champ est obligatoire",
    minLength: {
      value: 3,
      message: "Ce champ doit contenir au moins 3 lettres",
    },
    maxLength: {
      value: 60,
      message: "Ce champ doit contenir moins de 60 lettres",
    },
  },
  summary: {
    required: "Ce champ est obligatoire",
    minLength: {
      value: 40,
      message: "Ce champ doit contenir au moins 40 lettres",
    },
    maxLength: {
      value: 255,
      message: "Ce champ doit contenir moins de 255 lettres",
    },
  },
  quantity: {
    min: {
      value: 0.1,
      message: "quantité minimun 0.1",
    },
    max: {
      value: 1000,
      message: "quantité maximun 1000 ",
    },
  },
  prep_time: {
    required: "Ce champ est obligatoire",
  },
  step_order: {
    min: {
      value: 1,
      message: "Les étapes doivent être supérieur a 1",
    },
    max: {
      value: 21,
      message: "Les étapes ne peuvent pas dépasser 21",
    },
  },
  content: {
    required: "Ce champ est obligatoire",
    minLength: {
      value: 10,
      message: "Les instructions doivent contenir 10 lettres minimum",
    },
    maxLength: {
      value: 400,
      message: "Les instructions doivent contenir 400 lettres minimum",
    },
  },
};
