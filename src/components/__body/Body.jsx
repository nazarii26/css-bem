import React from 'react'
import './__body.scss'

export const Body = () => {
	<link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic" rel="stylesheet" />;
	<link href="https://fonts.googleapis.com/css?family=PT+Serif:regular,italic,700,700italic" rel="stylesheet" />;

	return (<>
		<div className="header__image">
		</div>
		<div className="heading">
			<h2 className="heading__title">
				Referenzen
			</h2>
			<p className="heading__text">
				Von unseren Designern gestaltet, von unseren Entwicklern programmiert, von unserem Team realisiert — in enger Abstimmung mit dem Kunden. Zum Festpreis.
			</p>
		</div>
		<div className="container">
			<div className="card1">
				<div className="card1__image"></div>
				<div className="card1__block">
					<div className="card1__text">
						<h6 className="card1__title">Webdesign Agentur</h6>
						<p className="card1__paragraph">Wir sind ein wirksames Team von Programmierern und Designer und bieten professionelle Dienstlei stungen rund um’s Thema Webdesign und Online-Marketing an. Seit 2006 kultivieren wir.</p>
					</div>
				</div>
				<div className="card1__sub">Webdesign Agentur</div>
			</div>

			<div className="card2">
				<div className="card2__image"></div>
				<div className="card2__block">
					<div className="card2__text">
						<h6 className="card2__title">Webdesign Agentur</h6>
						<p className="card2__paragraph">Wir sind ein wirksames Team von Programmierern und Designer und bieten professionelle Dienstlei stungen rund um’s Thema Webdesign und Online-Marketing an. Seit 2006 kultivieren wir.</p>
					</div>
				</div>
				<div className="card2__sub">Webdesign Agentur</div>
			</div>

			<div className="card3">
				<div className="card3__image"></div>
				<div className="card3__block">
					<div className="card3__text">
						<h6 className="card3__title">Webdesign Agentur</h6>
						<p className="card3__paragraph">Wir sind ein wirksames Team von Programmierern und Designer und bieten professionelle Dienstlei stungen rund um’s Thema Webdesign und Online-Marketing an. Seit 2006 kultivieren wir.</p>
					</div>
				</div>
				<div className="card3__sub">Webdesign Agentur</div>
			</div>

			<div className="card4">
				<div className="card4__image"></div>
				<div className="card4__block">\
					<div className="card4__text">
						<h6 className="card4__title">Webdesign Agentur</h6>
						<p className="card4__paragraph">Wir sind ein wirksames Team von Programmierern und Designer und bieten professionelle Dienstlei stungen rund um’s Thema Webdesign und Online-Marketing an. Seit 2006 kultivieren wir.</p>
					</div>
				</div>
				<div className="card4__sub">Webdesign Agentur</div>
			</div>
		</div>
		<div className="footer-list">
			<nav className="footer-menu">
				<ul className="footer-menu__list">
					<li ><a className="footer-menu__item" href="">PREISE</a></li>
					<li ><a className="footer-menu__item" href="">REFERENZEN</a></li>
					<li ><a className="footer-menu__item" href="">KONTAKT</a></li>
				</ul>
			</nav>
		</div>
		<div className="footer-info">
			<div className="blue-rectangle"></div>
			<div className="contacts">
				<div className="contacts__block">
					<h4 className="contacts__info">Postsstr, 45, 44890 Hamburg</h4>
					<h4 className="contacts__info">hello@tratata.de</h4>
					<h4 className="contacts__info">040 380-33-44</h4>
					<div className="sign1"></div>
					<div className="sign2"></div>
					<div className="sign3"></div>
				</div>
			</div>
			<div className="form">
				<form className="input" action="/my-handling-form-page" method="post">
					<h2 className="input__title">SCHREIBEN SIE UNS!</h2>
					<div>
						<input className="input__organization" type="text" id="name" placeholder="Firma / Organisation" name="user_name" />
					</div>
					<div className="input__mail-mobile">
						<input className="input__mail" type="text" id="name" placeholder="E-mail" name="user_name" />

						<input className="input__mobile" type="email" id="mail" placeholder="Telefon" name="user_telefon" />
					</div>
					<div>
						<textarea className="input__question" id="msg" placeholder="Was Ist Ihr Anliegen?" name="user_message"></textarea>
					</div>
					<button className="input__submit" type="submit">SUBMIT</button>
				</form>

			</div>
		</div>
<footer className="footer">
	<p className="footer___sub">© 2019 Genius Web Agentur. Alle Rechte vorbehalten</p>
</footer>
	</>
	)
}
