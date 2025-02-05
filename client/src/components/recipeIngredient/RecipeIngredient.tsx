// import axios from "axios";
// import { useForm } from "react-hook-form";
// import type { SubmitHandler } from "react-hook-form";
// import { toast } from "react-toastify";
// import type {
// 	IngredientType,
// 	RecipeIngredientType,
// } from "../../lib/definitions";

// import { useEffect, useState } from "react";
// // import type { FormEvent } from "react";
// export default function RecipeIngredient() {
// 	const { register, handleSubmit } = useForm<RecipeIngredientType>();

// 	const [ingredientData, setIngredientData] = useState<IngredientType[]>([]);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const response = await axios.get(
// 					`${import.meta.env.VITE_API_URL}/api/ingredients`,
// 					{},
// 				);
// 				setIngredientData(response.data);
// 			} catch (error) {
// 				toast.error(
// 					"Impossible de charger les données des ingredient, veuillez essayer ultérieurement.",
// 					{},
// 				);
// 			}
// 		};
// 		fetchData();
// 	}, []);

// 	const formSubmit: SubmitHandler<RecipeIngredientType> = async (data) => {
// 		try {
// 			console.info(data);
// 			const response = await axios.post(
// 				`${import.meta.env.VITE_API_URL}/api/recipes/`,
// 				data,
// 			);
// 			toast.success(response.data.message, {});
// 		} catch (err) {
// 			toast.error("Erreur lors de l'ajout de l'ingredient", {});
// 		}
// 	};

// 	return (
// 		<section>
// 			<form onSubmit={handleSubmit(formSubmit)}>
// 				<label>
// 					Choisir un ingrédient
// 					<select {...register("ingredient_id")}>
// 						{ingredientData.map((ingredient) => (
// 							<option key={ingredient.id} value={ingredient.id}>
// 								{ingredient.label}
// 							</option>
// 						))}
// 					</select>az
// 				</label>
// 				<label>
// 					<input type="text" {...register("quantity")} />
// 					quantité
// 				</label>
// 				{/* <label>
// 					recipe id
// 					<input type="text" {...register("recipe_id")} />
// 				</label> */}

// 				{/* <button type="submit">Ajouter</button> */}
// 			</form>
// 		</section>
// 	);
// }
