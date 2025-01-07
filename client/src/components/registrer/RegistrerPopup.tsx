import style from "./registrerPopup.module.css";

export default function RegistrerPopup() {
	return (
		<form className={style.formulaire}>
			<div>
				<h2>Inscription</h2>
			</div>
			<div className={style.champ}>
				<label htmlFor="lastName">Nom</label>
				<input type="text" required className={style.bloc} />
			</div>
			<div className={style.champ}>
				<label htmlFor="firstName">Prenom</label>
				<input type="text" required className={style.bloc} />
			</div>

			<div className={style.champ}>
				<label htmlFor="userName">Identifiant</label>
				<input type="text" required className={style.bloc} />
			</div>
			<div className={style.champ}>
				<label htmlFor="mail">E-mail</label>
				<input type="email" required className={style.bloc} />
			</div>
			<div className={style.champ}>
				<label htmlFor="password">Mot de passe</label>
				<input type="password" required className={style.bloc} />
			</div>
			<div className={style.champ}>
				<label htmlFor="password">Confirmer le mot de passe</label>
				<input type="password" required className={style.bloc} />
			</div>
			<div className={style.champ}>
				<label htmlFor="date">Date de naissance</label>
				<input type="date" required className={style.bloc} />
			</div>
			<div className={style.champ}>
				<label htmlFor="image">Image de profil</label>
				<input type="file" required />
			</div>
			<div className={style.btncontainer}>
				<button type="submit" className={style.btn}>
					Je m'inscris
				</button>
				<p className={style.font}>
					Vous avez déjà un compte?
					<a href="/" className={style.lien}>
						Connectez-vous
					</a>
				</p>
			</div>
		</form>
	);
}
