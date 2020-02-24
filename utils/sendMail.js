const fs = require("fs")

module.exports = (to,subject,text) => {
    require('gmail-send')({
        user: process.env.MAIL_USER ,
        pass: process.env.MAIL_PASSWORD,
        from: "Etud\'event",
        to,
        subject
    
    })({
        html: `<!DOCTYPE html>
<!-- saved from url=(0035)https://uixninja.github.io/paynura/ -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title></title>
	<meta name="description" content="">
	<meta name="keywords" content="">
	
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<link rel="stylesheet" href="./uixninja.github.io_files/main.css" type="text/css">
	<link rel="stylesheet" href="./uixninja.github.io_files/animate.css" type="text/css">
	<script type="text/javascript" src="./uixninja.github.io_files/jquery-3.2.1.min.js.téléchargement"></script>
	<script src="./uixninja.github.io_files/jquery.viewportchecker.min.js.téléchargement"></script>
	<script type="text/javascript" src="./uixninja.github.io_files/carousel.js.téléchargement"></script>
    <script type="text/javascript" src="./uixninja.github.io_files/main.js.téléchargement"></script>
</head>

<body class="landing_page"><div class="popup popup_login" style="display: none;">
	<div class="close"></div>
	<div class="block">
		<a href="https://uixninja.github.io/paynura/#" class="logo"><img src="./uixninja.github.io_files/logo_popup.png" alt=""></a>
		<input type="text" value="" placeholder="Username or Email">
		<div class="password">
			<input type="password" value="" placeholder="Password">
			<div class="hint">?</div>
		</div>
		<div class="buttons_box">
			<button type="button" class="btn">
				<span>login</span>
			</button>
		</div>
	</div>
</div>

<div class="popup popup_creation" style="display: none;">
	<div class="close"></div>
	<div class="block">
		<input type="text" value="" placeholder="Username">
		<input type="text" value="" placeholder="Email">
		<input type="password" value="" placeholder="Password">
		<input type="password" value="" placeholder="Confirm password">
		<div class="buttons_box">
			<button type="button" class="btn"><span>continue</span></button>
		</div>
	</div>
</div>


<div class="container">
	<header class="hidden visible animated fadeInUp full-visible">
		<div class="fade"></div>
		<div class="logo">
			<a href="https://uixninja.github.io/paynura/#"><img src="./uixninja.github.io_files/logo.png" alt=""></a>
		</div>
		

		<div class="side">
			<div class="logo">
				<a href="https://uixninja.github.io/paynura/#"><img src="./uixninja.github.io_files/logo.png" alt=""></a>
			</div>
			<div class="buttons_box">
				<div class="btn btn_login"><span>login</span></div>
				<div class="btn btn_sign"><span>sign up</span></div>
			</div>
			<ul>
				<li><a href="https://uixninja.github.io/paynura/#">FEATURES</a></li>
				<li><a href="https://uixninja.github.io/paynura/#">CONTACT</a></li>
			</ul>
		</div>
		<div class="responsive_menu"></div>
	</header>

	<div class="what_is hidden visible animated fadeInUp full-visible">
		<div class="centered">
			<h2>What is <span>Paynura?</span></h2>
			<div class="explanation">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et 
				dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
			<div class="planet"><img src="./uixninja.github.io_files/planet.png" alt=""></div>
			<div class="data">
				<div>
					<div class="border">
						<div class="name">
							Neteller Account <span class="bull">•</span>
							<strong>2,232</strong>
						</div>
					</div>
				</div>
				<div>
					<div class="border">
						<div class="name">
							VIP upgraded <span class="bull">•</span>
							<strong>42,232</strong>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="about hidden visible animated fadeInUp">
		<div class="centered">
			<h2>About our <span>Affiliate</span> Partner Program</h2>
			<div class="schema_desktop">
				<div class="title client">Clients</div>
				<div class="title partners">Partners</div>
				<div class="title logo">Your logo</div>
				<div class="title customers">
					<p>Neteller</p>
					<p>Skrill</p>
					<p>Paysafe</p>
					<p>ecoPayz</p>
				</div>

				<ul class="client">
					<li>Extra Support</li>
					<li>Better Conditions</li>
					<li>Faster VIP Status</li>
					<li>Additional monthly Bonuses</li>
				</ul>

				<ul class="logo">
					<li>Referring</li>
					<li>Interested</li>
					<li>Clients</li>
				</ul>

				<ul class="partners">
					<li>Full affiliate Commission</li>
					<li>Regular Updates and Support</li>
					<li>Monthly Report &amp; Payments</li>
					<li>Trustful Partnership</li>
				</ul>

				<ul class="customers">
					<li>New &amp; more satisfed Customers</li>
					<li>Brand&amp; Product Improvement</li>
					<li>Revenue Increase</li>
				</ul>

				<ul class="logo_from_cust">
					<li>Individual Support for clients</li>
					<li>Affiliate Commission</li>
				</ul>
				
			</div>
			<div class="data">
				<div>The eWallet business, its providers and market opportunities are as complex as it will get within the affiliatebusiness. We are working exclusively with eWallets to offer our affiliate partners an exceptional expertise. This is how we became the biggest and most trusted.</div>
				<div>Wallet brand in business. We do not just refer new customers to ecoPayz, Skrill  and NETELLER as normal affiliates would do, we take care of your clients support issues, their bonus payments and always negotiate the best conditions and promotions available on the market.</div>
			</div>
		</div>
	</div>

	<div class="upgrade hidden visible animated fadeInUp">
		<div class="centered flex">
			<div class="information">
				<h2>Instant <span>VIP</span> Upgrades</h2>
				<p class="explanation">All of your new customers get instant Skrill/Neteller VIP upgrade once they verify their account.</p>
				<div class="buttons_box">
					<a href="https://uixninja.github.io/paynura/#" class="btn"><span>learn more</span></a>
				</div>
			</div>
			<div class="picture">
				<img src="./uixninja.github.io_files/upgrade.png" alt="">
				<a href="https://uixninja.github.io/paynura/#" class="btn"><span>learn more</span></a>
			</div>
		</div>
	</div>

	<div class="verification hidden visible animated fadeInUp">
		<div class="centered flex">
			<div class="information">
				<h2>Fast <span>Track</span> Verificaiton</h2>
				<p class="explanation">All of your new customers get instant Skrill/Neteller VIP upgrade once they verify their account.</p>
				<div class="buttons_box">
					<a href="https://uixninja.github.io/paynura/#" class="btn"><span>learn more</span></a>
				</div>
			</div>
			<div class="picture">
				<img src="./uixninja.github.io_files/verification.png" alt="">
				<a href="https://uixninja.github.io/paynura/#" class="btn"><span>learn more</span></a>
			</div>
		</div>
	</div>

	<div class="program hidden visible animated fadeInUp">
		<div class="centered flex">
			<div class="information">
				<h2><span>Subaffiliate</span> Program</h2>
				<p class="explanation">All of your new customers get instant Skrill/Neteller VIP upgrade once they verify their account.</p>
				<div class="buttons_box">
					<a href="https://uixninja.github.io/paynura/#" class="btn"><span>learn more</span></a>
				</div>
			</div>
			<div class="picture">
				<img src="./uixninja.github.io_files/program.png" alt="">
				<a href="https://uixninja.github.io/paynura/#" class="btn"><span>learn more</span></a>
			</div>
		</div>
	</div>

	<div class="reporting hidden">
		<div class="centered flex">
			<div class="information">
				<h2><span>Detailed</span> Reporting</h2>
				<p class="explanation">All of your new customers get instant Skrill/Neteller VIP upgrade once they verify their account.</p>
				<div class="buttons_box">
					<a href="https://uixninja.github.io/paynura/#" class="btn"><span>learn more</span></a>
				</div>
			</div>
			<div class="picture">
				<img src="./uixninja.github.io_files/reporting.png" alt="">
				<a href="https://uixninja.github.io/paynura/#" class="btn"><span>learn more</span></a>
			</div>
		</div>
	</div>

	<div class="why hidden">
		<div class="centered">
			<h2><span>Why</span> Us?</h2>
			<div class="items">
				<div>
					<div class="ico"><img src="./uixninja.github.io_files/why_ico1.png" alt=""></div>
					<div class="info">
						<h4>Flexible Affiliate Commission Deal</h4>
						<p>All our affiliates get 20% commission of their revenue or can also get a CPA deal.</p>
					</div>
				</div>
				<div>
					<div class="ico"><img src="./uixninja.github.io_files/why_ico2.png" alt=""></div>
					<div class="info">
						<h4>Flexible Affiliate Commission Deal</h4>
						<p>All our affiliates get 20% commission of their revenue or can also get a CPA deal.</p>
					</div>
				</div>
				<div>
					<div class="ico"><img src="./uixninja.github.io_files/why_ico3.png" alt=""></div>
					<div class="info">
						<h4>Flexible Affiliate Commission Deal</h4>
						<p>All our affiliates get 20% commission of their revenue or can also get a CPA deal.</p>
					</div>
				</div>
				<div>
					<div class="ico"><img src="./uixninja.github.io_files/why_ico4.png" alt=""></div>
					<div class="info">
						<h4>Flexible Affiliate Commission Deal</h4>
						<p>All our affiliates get 20% commission of their revenue or can also get a CPA deal.</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="simple hidden">
		<div class="centered flex">
			<div class="information">
				<h2><span>Simple</span> &amp; Unique</h2>
				<p class="explanation">We take care of your interested customers who are unsure if or which eWallet suits best for their needs. We help them to get their accounts registered and verified as fast as possible and withoutthe normal days or even weeks in waiting to get responses from the normal support teams. And as soon as they are eligible,we get your clients upgraded to VIP status with highest possible bonuses <span>...</span></p>
				<div class="show_all">
					<a href="https://uixninja.github.io/paynura/#">
						<span>Show all Information</span>
						<img src="./uixninja.github.io_files/str.png" alt="">
					</a>
				</div>
			</div>
			<div class="picture">
				<img src="./uixninja.github.io_files/simple.png" alt="">
				<div class="show_all">
					<a href="https://uixninja.github.io/paynura/#">
						<span>Show all Information</span>
						<img src="./uixninja.github.io_files/str.png" alt="">
					</a>
				</div>
			</div>
		</div>
	</div>

	<div class="benefits hidden">
		<div class="centered flex">
			<div class="information">
				<h2>Benefits with <span>Paynura</span>- Optimizer</h2>
				<p class="explanation">With us you will have a strong partner with a lot of experience by your side. We make sure that you will have:</p>
				<ul>
					<li>The Highest possible customer satisfaction for your Paynuracustomers.• No time commitment while generating another passiveincome.</li>
					<li>Full Paynura affiliate share of all provided Paynura solutions.</li>
					<li>Easy to follow live-time stats &amp; reports.</li>
					<li>Professional data management &amp; accounting.</li>
				</ul>


				<p class="explanation">For any further questions, please do not hesitate to contact us. Just submit your contact details by using the form below. We are happy to help and answer all your questions.</p>
				<div class="show_all">
					<a href="https://uixninja.github.io/paynura/#">
						<span>Show all Information</span>
						<img src="./uixninja.github.io_files/str.png" alt="">
					</a>
				</div>
			</div>
			<div class="picture">
				<img src="./uixninja.github.io_files/benefirs.png" alt="">
				<div class="show_all">
					<a href="https://uixninja.github.io/paynura/#">
						<span>Show all Information</span>
						<img src="./uixninja.github.io_files/str.png" alt="">
					</a>
				</div>
			</div>
		</div>
	</div>

	<div class="request hidden">
		<div class="centered">
			<h2>Request <span>More</span> Information</h2>
			<div class="contact_form">
				<input type="text" value="" placeholder="Name:">
				<input type="text" value="" placeholder="Email Address:">
				<input type="text" value="" placeholder="Skype:">
				<input type="text" value="" placeholder="Website:">

				<div class="select">
					<select name="" id="">
						<option value="">General Affiliate:</option>
						<option value="">1</option>
						<option value="">2</option>
					</select>
				</div>

				<textarea name="" placeholder="Your message:"></textarea>

				<div class="buttons_box">
					<button type="button" class="btn"><span>contact us</span></button>
				</div>
			</div>
		</div>
	</div>

	<div class="partner_network hidden">
		<div class="centered">
			<h2><span>Partner</span> Network</h2>

			<ul>
				<li><a href="https://uixninja.github.io/paynura/#"><img src="./uixninja.github.io_files/part1.png" alt=""></a></li>
				<li><a href="https://uixninja.github.io/paynura/#"><img src="./uixninja.github.io_files/part2.png" alt=""></a></li>
				<li><a href="https://uixninja.github.io/paynura/#"><img src="./uixninja.github.io_files/part3.png" alt=""></a></li>
				<li><a href="https://uixninja.github.io/paynura/#"><img src="./uixninja.github.io_files/part4.png" alt=""></a></li>
				<li><a href="https://uixninja.github.io/paynura/#"><img src="./uixninja.github.io_files/part5.png" alt=""></a></li>
			</ul>

			<div class="information">
				<div class="show_all">
					<a href="https://uixninja.github.io/paynura/#"><span>Load More ...</span></a>
				</div>
			</div>
		</div>
	</div>

	<div class="end_content"></div>
</div>

<footer>
	<div class="centered">
		<div class="logo"><a href="https://uixninja.github.io/paynura/#"><img src="./uixninja.github.io_files/logo.png" alt=""></a></div>
		<ul>
			<li><a href="https://uixninja.github.io/paynura/#">Privacy</a></li>
			<li><a href="https://uixninja.github.io/paynura/#">Policy</a></li>
			<li><a href="https://uixninja.github.io/paynura/#">Contact</a></li>
			<li><a href="https://uixninja.github.io/paynura/#">Jobs</a></li>
			<li><a href="https://uixninja.github.io/paynura/#">Partner</a></li>
			<li><a href="https://uixninja.github.io/paynura/#">Program</a></li>
			<li><a href="https://uixninja.github.io/paynura/#">Tell-a-Friend</a></li>                
		</ul>
		<h6>Copyright © 2010-2018, paynura-Optimizer.com. All Rights Reserved. Terms &amp; Conditions.</h6>
		<div class="language"><img src="./uixninja.github.io_files/eng.png" alt=""></div>
		<div class="social">
			<a href="https://uixninja.github.io/paynura/#"><img src="./uixninja.github.io_files/fb_ico.png" alt=""></a>
			<a href="https://uixninja.github.io/paynura/#"><img src="./uixninja.github.io_files/link_ico.png" alt=""></a>
			<a href="https://uixninja.github.io/paynura/#"><img src="./uixninja.github.io_files/tw_ico.png" alt=""></a>
			<a href="https://uixninja.github.io/paynura/#"><img src="./uixninja.github.io_files/gh_ico.png" alt=""></a>
			<a href="https://uixninja.github.io/paynura/#"><img src="./uixninja.github.io_files/tg_ico.png" alt=""></a>
		</div>
    </div>
</footer>

</body></html>` 
    }, (error, result, fullResult) => {
        if (error) console.error(error);
        console.log(result);
    })

}