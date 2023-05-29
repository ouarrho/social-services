import img from '@png/image.png'

export default function AppMain() {
	return (
		<section id="home" className="hero-area">
			<div className="container" style={{ maxWidth: '960px' }}>
				<div className="row align-items-center">
					<div className="col-lg-5 col-md-12 col-12">
						<div className="hero-content">
							<h1 className="wow" style={{ fontSize: '30px', lineHeight: '48px' }}>Boostez votre présence en ligne et attirez une clientèle plus large</h1>
							<p className="wow" style={{ fontSize: '16px', fontWeight: '500' }}>Démarquez-vous en ligne et atteignez de nouveaux horizons commerciaux</p>
						</div>
					</div>
					<div className="col-lg-7 col-md-12 col-12">
						<div className="hero-image wow">
							<img src={ img } alt="#"></img>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}