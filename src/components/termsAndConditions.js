import React from "react";
import "../styles/tAndC.css";
import Footer from "./main/footer";
const TAndC = ({ showmore, setCheck }) => {
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<div
				onClick={() => showmore(false)}
				style={{ width: "100vw", height: "10vh" }}
			></div>
			<div style={{ display: "flex" }}>
				<div onClick={() => showmore(false)} style={{ width: "10vw" }}></div>
				<div className="t-and-c-main">
					<div>
						<h3>Terms of Use</h3>
						<span className="close" onClick={() => showmore(false)}>
							Close
						</span>
					</div>
					<p style={{ clear: "both" }}>
						This Agreement sets forth the terms and conditions that apply to the
						access and use of the Website{" "}
						<a href="https://www.neogrowth.in/">https://www.neogrowth.in/</a>{" "}
						and its Mobile Application (collectively be referred to as
						"Website"), which is managed and operated by NeoGrowth Credit
						Private Limited, (hereinafter collectively be referred to as
						"Company"/ "NeoGrowth"), incorporated under the laws of India and
						registered under the Companies Act, 1956.
						<br />
						This document/agreement (referred to as “Agreement”) is an
						electronic record in terms of Information Technology Act, 2000 and
						generated by a computer system and does not require any physical or
						digital signatures. This document is published in accordance with
						the provisions of Rule 3 of the Information Technology
						(Intermediaries guidelines) 2011, that provides for the due
						diligence to be exercised for the access or usage of this Website.
					</p>
					<p>
						By accessing this Website or registering your information on the
						Website, the users (hereinafter referred to as "you" or "your")
						agree to be bound by this Terms of Use ("TOU"). This Agreement along
						with Privacy Policy and Disclaimer describes our relationship with
						you will be subject to the rules, guidelines, policies, terms, and
						conditions applicable to any specific Service that is provided by
						this Website and they shall be deemed to be incorporated into this
						TOU and shall be considered as part and parcel of this TOU.
					</p>
					<p>
						Be sure to return to this page periodically to review the most
						current version of the TOU. We reserve the right at any time, at our
						sole discretion, to change or otherwise modify the TOU without prior
						notice, and your continued access or use of this Website signifies
						your acceptance of the updated or modified by TOU.
					</p>
					<p>
						PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY. YOUR ACCEPTANCE OF
						TERMS CONTAINED HEREIN CONSTITUTES THE AGREEMENT BETWEEN YOU AND THE
						COMPANY FOR THE PURPOSE AS DEFINDED HEREUNDER.
					</p>
					<h4>1. Description and Acceptance of Services</h4>
					<p>
						Company, hereby offers you with access to information primarily
						about certain marketing / digital products/services including, but
						not restricted, to software services, marketing, branding,
						promotion, digital services, digital transformation etc.
						(collectively referred as "Service/s"). The above said Services and
						ancillary services are provided on a commercially reasonably effort
						basis and you agree that your participation for availing the
						above-mentioned services is purely at your will and consent.
					</p>
					<p>
						Your continued usage of the Services and ancillary services from
						time to time would also constitute acceptance of the TOU including
						any updation or modification thereof and you would be bound by this
						Agreement until this Agreement is terminated as per provisions
						defined herein.
					</p>
					<p>
						You agree and authorize Company to share your information with its
						group companies and other third parties, in so far as required for
						joint marketing purposes/offering various services/report
						generations and/or to similar services to provide you with various
						value-added services, in association with the Services selected by
						you or otherwise. You agree to receive communications through
						emails, telephone and/or SMS, from the Company or its third-party
						vendors/business partners/ marketing affiliates regarding the
						Services/ancillary services updates, information/promotional emails
						and/or product announcements. In this context, you agree and consent
						to receive all communications at the mobile number provided by you,
						even if this mobile number is registered under DND/NCPR list under
						TRAI regulations. And for that purpose, you further authorize
						Company to share/disclose the information to any third-party service
						provider or any affiliate, its group companies, authorized agents.
					</p>
					<p>
						Company will retain and use your information as necessary to comply
						with our legal obligations, resolve disputes and enforce our
						agreements entered into for providing Services and ancillary
						services.
					</p>
					<h4>2. License and Website Access</h4>
					<p>
						You acknowledge and agree that Company owns all legal right, title
						and interest in and to the Services, including any intellectual
						property rights which subsist in the Services (whether those rights
						are registered or not). You further acknowledge that the Services
						may contain information which is designated confidential by Company
						and that you shall not disclose such information without Company`s
						prior written consent. The contents of the Website, including its
						"look and feel" (e.g. text, graphics, images, logos and button
						icons), photographs, editorial content, notices, software and other
						material are the owned/licensed by/to Company and/or its third Party
						Service Providers/their licensors and are duly protected by them
						under applicable copyright, trademark and other laws.
					</p>
					<p>
						Company grants you a limited license to access and make use of the
						Website, the Services and ancillary services. This license does not
						include any downloading or copying of any kind of information for
						the benefit of another individual, vendor or any other third party
						or to create a derivative work from, modify, reverse engineer,
						reverse assemble or otherwise attempt to discover any source code,
						sell, assign, sublicense, grant a security interest in or otherwise
						transfer any right in the Services. Any unauthorized use by you
						shall terminate the permission or license granted to you.
					</p>
					<p>
						By using the Website you agree not to: (i) use this Website or its
						contents for any commercial purpose; (ii) make any speculative,
						false, or fraudulent transaction or any transaction in anticipation
						of demand; (iii) access, monitor or copy any content or information
						of this Website using any robot, spider, scraper, or other automated
						means or any manual process for any purpose without our express
						written permission; (iv) violate the restrictions in any robot
						exclusion headers on this Website or bypass or restrict or
						circumvent other measures employed to prevent or limit access to
						this Website; (v) take any action that imposes, or may impose, in
						our discretion, an unreasonable or disproportionately large load on
						our infrastructure; (vi) deep-link to any portion of this Website
						(including, without limitation, the purchase path for any service)
						for any purpose without our express written permission; or (vii)
						"frame", "mirror" or otherwise incorporate any part of this Website
						into any other website without our prior written authorization.
					</p>
					<h4>3. Privacy Policy</h4>
					<p>
						By using the Website, you hereby consent to the use of your
						information as we have outlined in our Privacy Policy. This Privacy
						Policy explains how Company treats your personal information when
						you access the Website and use other ancillary Services.
					</p>
					<h4>4. Your Registration/Account</h4>
					<p>
						In consideration of your use of the Website and registering with us,
						you represent that you are of legal age to form a binding contract
						and are not a person barred from receiving services under the laws
						of India or other applicable jurisdiction and will only use the
						Website to make legitimate purchases for you or for another person
						for whom you are legally authorized to act (and will inform such
						other persons about the TOU and/or Privacy Policy) that apply to the
						purchase you have made on their behalf (including all rules and
						restrictions applicable thereto).
					</p>
					<p>
						You agree and understand that you are solely responsible for
						maintaining the confidentiality of your password which, together
						with your Login ID (as may be applicable in accordance with the
						Service selected), allows you to access the Service. That Login ID
						and password, together with any mobile number or other contact
						information you provide, form your ("Registration Information"). You
						agree that you are responsible for maintaining the confidentiality
						of your Login ID and password, and for restricting access to your
						computer. You agree to accept responsibility for all activities that
						occur through your account or password. Because of this, we strongly
						recommend that you exit/ logout from your account at the end of each
						session. You agree to notify Company immediately of any unauthorized
						use of your account or any other breach of security. You further
						agree that Company shall not be liable for any unauthorized use or
						access, unless it is proved that the unauthorized use or access
						occurred solely due to reasons directly attributable to Company.
					</p>
					<p>
						You shall provide true, accurate, current and complete information
						about yourself and undertake to inform/update of any change in your
						Registration Information promptly and keep it up-to-date and
						accurate at all times, as it has a direct bearing on the provision
						of Services and ancillary services by or through Company. You agree
						not to misrepresent your identity nor will you make an attempt to
						make an unlawful access to the Website or use of the Services.
						Additional terms and conditions will apply to your purchase of
						services that you select. Please read these additional terms and
						conditions carefully.
					</p>
					<h4>5. Customer Due Diligence requirements (CDD)</h4>
					<p>
						You agree and acknowledge that for undertaking any transaction
						through the website, our Company may undertake client/customer due
						diligence measurers and seek mandatory information required for KYC
						purpose which as a customer you are obliged to give, while
						facilitating your request of services and other marketing or
						promotional requirements, in accordance with applicable Prevention
						of Money Laundering Act (“PMLA”) and rules. Our Company may obtain
						sufficient information to establish, to its satisfaction or the
						banks/financial institutions, the identity of each new
						customer/user, and to ascertain the purpose of the intended nature
						of relationship between you and the Service Provider. You agree and
						acknowledge that our Company can undertake enhanced due diligence
						measures (including any documentation), to satisfy itself relating
						to customer due diligence requirements in line with the requirements
						and obligations under the applicable PMLA Act and rules.
					</p>
					<h6>6. Eligibility</h6>
					<p>
						You declare and confirm that you are a resident of India, above 18
						(Eighteen) years of age, and have the capacity to contract as
						specified under the Indian Contract Act, 1872, while availing the
						Services offered by the Company.
					</p>
					<h4>7. Submitted Content</h4>
					<p>
						By sharing or submitting any content including any data and
						information on the Website, you agree that you shall be solely
						responsible for all content you post on the Website and Company
						shall not be responsible for any content you make available on or
						through the Website. At Company`s sole discretion, such content may
						be included in the Service and ancillary services (in whole or in
						part or in a modified form). With respect to such content you submit
						or make available on the Website, you grant Company a perpetual,
						irrevocable, non-terminable, worldwide, royalty-free and
						non-exclusive license to use, copy, distribute, publicly display,
						modify, create derivative works, and sublicense such materials or
						any part of such content. You agree that you are fully responsible
						for the content you submit. You are prohibited from posting or
						transmitting to or from this Website: (i) any unlawful, threatening,
						libelous, defamatory, obscene, pornographic, or other material or
						content that would violate rights of publicity and/or privacy or
						that would violate any law; (ii) any commercial material or content
						(including, but not limited to, solicitation of funds, advertising,
						or marketing of any good or services); and (iii) any material or
						content that infringes, misappropriates or violates any copyright,
						trademark, patent right or other proprietary right of any third
						party. You shall be solely liable for any damages resulting from any
						violation of the foregoing restrictions, or any other harm resulting
						from your posting of content to this Website.
					</p>
					<h4>8. Third Party Links/Offers</h4>
					<p>
						This Website may provide links to other websites or resources. Since
						the Company has no control over such third-party websites and
						resources, you acknowledge and agree that Company is not responsible
						for the availability of such external sites or resources, and does
						not endorse and is not responsible or liable for any content,
						advertising, products or other materials on or available from such
						sites or resources. You further acknowledge and agree that Company
						shall not be responsible or liable, directly or indirectly, for any
						damage or loss caused or alleged to be caused by or in connection
						with use of or reliance on any such content, goods or services
						available on or through any such site or resource. Your interaction
						with any third party accessed through the Website is at your own
						risk, and Company will have no liability with respect to the acts,
						omissions, errors, representations, warranties, breaches or
						negligence of any such third parties or for any personal injuries,
						death, property damage, or other damages or expenses resulting from
						your interactions with the third parties.
					</p>
					<h4>9. Group Insurance Policy</h4>
					<p>
						You understand that as a part of the Services provided by the
						Company, it may further offer you group insurance coverage’s from
						different insurers for which NeoGrowth Credit Private Limited shall
						be the Master Policy Holder ("MPH") provided you are a customer of
						the Company. Such insurance coverage shall be governed by and
						subject to the terms, conditions, and exclusions, limitations
						thereof as per the guidelines issued by the Insurance Regulatory And
						Development Authority of India ("IRDAI").
					</p>
					<h4>10. 10. Disclaimer of Warranty</h4>
					<p>
						You expressly understand and agree that your use of the Services,
						ancillary services and all information, products, other services and
						other content (including that of the third parties) included in or
						accessible from the Website is at your sole risk. The Services and
						ancillary services are provided on an "as is" and "as available"
						basis. Company makes no representations, warranties or guarantees,
						express or implied, regarding the accuracy, reliability or
						completeness of the content on the Website or of the services
						(whether or not sponsored by third party service providers), and
						expressly disclaims any warranties of non-infringement or fitness
						for a particular purpose.
					</p>
					<p>
						The Company expressly disclaim all warranties of any kind as to the
						Services, ancillary services and all information, products, services
						and other content (including that of the third parties) included in
						or accessible from the services, whether express or implied,
						including but not limited to the implied warranties of
						merchantability, fitness for a particular purpose and
						non-infringement.
					</p>
					<p>
						Company and its service providers, affiliates, business partners
						make no warranty that (i) the services will meet your requirements,
						(ii) the services will be uninterrupted, timely, secure, or
						error-free, (iii) the results that may be obtained from the use of
						the services will be accurate or reliable, (iv) the quality of any
						products, services, information, or other material purchased or
						obtained by you through the services will meet your expectations,
						and (v) any errors in the technology will be corrected.
					</p>
					<p>
						Prices for Products available on our Website and are incorporated
						into this TOUs by reference. All prices, whether specified or not,
						are in Indian rupees. Prices, Products and Services are offered by
						the Company’s business partners, and may change in accordance with
						the brand guidelines or other terms and conditions applicable to
						each of the business partners of NeoGrowth. In some cases, Services
						and prices are offered by the Company itself and it reserves the
						right to modify the use and prices of such Services. You further
						undertake that by initiating a transaction, you are entering into a
						legally binding and enforceable contract with these business
						partners of the Company, to purchase the products or avail the
						services using such payment facilities as may be permitted by
						applicable laws and as may be accepted by the Company.
					</p>
					<p>
						The Company does not charge any registration/membership or browsing
						fee. However, the Company reserves the absolute right to charge any
						fee for registration/ membership or browsing fee at any time.. All
						such fees that the Company may charge will be intimated to the users
						and such change shall automatically become effective immediately
						after they are posted on the Website. All such fees charged by the
						Company shall be in Indian Rupees. Your continued use of the Company
						shall be deemed as an acceptance of the amended terms of the TOU.
					</p>
					<p>
						The Company may enter into agreements with third party payment
						gateway aggregators and financial institutions authorized by the
						Reserve Bank of India for collection, refund and remittance and to
						facilitate payment between you, NeoGrowth and its business partners,
						as the case may be. The Company shall initiate the remittance of the
						payments made by you and the date of completion of transaction shall
						be after the products are delivered to you or after the Services are
						rendered to you and such other additional time as may be agreed
						between Website and its business partners, as the case may be.
					</p>
					<p>
						While availing any of the payment method/s available on the Website,
						the Company will not be responsible or assume any liability,
						whatsoever in respect of any loss or damage arising directly or
						indirectly to you due to:
						<ol>
							<li>Lack of authorization for any transaction/s, or</li>
							<li>Any payment issues arising out of the transaction, or</li>
							<li>
								Illegitimacy of the payment methods (credit/debit card frauds
								etc.) being used by a you;
							</li>
							<li>Decline of transaction for any other reason(s)</li>
						</ol>
						Notwithstanding anything contained herein, the Website reserves the
						right to conduct additional verification for security or other
						reasons if it is not satisfied with the creditability of you/your
						transaction.
					</p>
					<p>
						Use of the payment facilities provided by the Website shall not
						render the Website liable or responsible for the non-delivery,
						non-receipt, non-payment, damage, breach of representations and
						warranties, non-provision of after sales or warranty services or
						fraud as regards the products or services listed on the Website. The
						Website shall not be responsible for any damages, interests or
						claims arising from not processing a transaction.
					</p>
					<p>
						You hereby agree to provide accurate information, such as
						credit/debit information for purchasing any Service or product on or
						through the Website. You further warrant that you shall not use
						payment information or instrument that is not lawfully owned by you.
						In addition to this TOUs, the terms and conditions of the bank or
						other financial institution shall also be applicable to every user.
						The Website disclaims any liability arising out of declining of
						payment by such bank or financial institution.
					</p>
					<p>
						NeoGrowth may in its sole discretion impose limits on the number of
						transaction which an individual holding a financial instrument may
						use for payment for products or services. Additionally, the Website
						reserves the right to refuse to process transactions exceeding such
						limit and transactions by you that have incurred questionable
						charges and amounts.
					</p>
					<p>
						NeoGrowth is merely a facilitator for providing you with payment
						channels through automated online electronic payments (either itself
						or through its payment gateway service providers), cash on delivery,
						collection and remittance facility for the payment of products
						purchased by the User on the Website using the existing authorized
						banking infrastructure and credit card payment gateway networks (of
						either the Website or Service Providers).
					</p>
					<p>
						NeoGrowth shall not be held responsible and shall bear no liability
						in case of failure or delay of delivering the products or services
						including any damage or loss caused to you due to such delay. No
						deliveries of the products/services shall be made outside the
						territorial boundaries of India.
					</p>
					<h4>11. Limitation of Liability</h4>
					<p>
						You expressly understand and agree that the Company (including its
						subsidiaries, affiliates, directors, officers, employees,
						representatives and providers) shall not be liable for any direct,
						indirect, incidental, special, consequential or exemplary damages,
						including but not limited to damages for loss of profits,
						opportunity, goodwill, use, data or other intangible losses, even if
						Company has been advised of the possibility of such damages,
						resulting from (i) any failure or delay (including without
						limitation the use of or inability to use any component of the
						Website), or (ii) any use of the Website or content, or (iii) the
						performance or non-performance by us or any provider, even if we
						have been advised of the possibility of damages to such parties or
						any other party, or (b) any damages to or viruses that may infect
						your computer equipment or other property as the result of your
						access to the Website or your downloading of any content from the
						Website.
					</p>
					<p>
						Notwithstanding the above, if the Company is found liable for any
						proven and actual loss or damage which arises out of or in any way
						connected with any of the occurrences described above, then you
						agree that the liability of Company shall be restricted to, in the
						aggregate, any Service/transactional fees paid by you to the Company
						in connection with such transaction(s)/ Services on this Website, if
						applicable.
					</p>
					<p>
						The Company has no control over the third-party websites which would
						be provided to you through its Website. You acknowledge and agree
						that under no circumstance shall the Company be liable for your
						using the services offered or provided by any third-party service
						provider.
					</p>
					<h4>12. Indemnity</h4>
					<p>
						You agree to indemnify and hold Company (and its affiliates,
						officers, directors, agents and employees) harmless from any and
						against any claims, causes of action, demands, recoveries, losses,
						damages, fines, penalties or other costs or expenses of any kind or
						nature, including reasonable attorneys' fees, or arising out of or
						related to your breach of this TOU, your violation of any law or the
						rights of a third party, or your use of the Website.
					</p>
					<p>
						You shall not sue or otherwise make or present any demand or claim,
						and irrevocably, unconditionally and entirely release, waive and
						forever discharge the Company, its officers, directors, employees,
						agents, licensees, affiliates, successors and assigns, jointly and
						individually (hereinafter "Release"), from any and all manner of
						liabilities, claims, demands, losses, claims, suits, costs and
						expenses (including court costs and reasonable attorney fees)
						("Losses"), whatsoever, in law or equity, whether known or unknown,
						which you ever had, now have, or in the future may have against the
						Release with respect to the Services. You agree to defend,
						indemnify, and hold harmless the Release from and against any and
						all Losses resulting from claims made against the Company by third
						parties arising from and in connection with this Authorization.
					</p>
					<h4>13. Additional Terms and Conditions</h4>
					<p>
						Company reserves the right to make changes to the Website, related
						policies and agreements, this TOU and the Privacy Policy at any time
						as it deems fit and proper, including but not limited to comply with
						changes in law or regulation, correct inaccuracies, omissions,
						errors or ambiguities, reflect changes in the process flow, scope
						and nature of the Services and ancillary services, company
						re-organization, market practice or customer requirements. Upon any
						change, Company will notify the updated Terms on the Website or
						other means. Your continued use of the Services and ancillary
						services constitutes acceptance of the changes and an agreement to
						be bound by Terms, as amended. If you do not agree to the changes,
						you may please discontinue your use of the Services and ancillary
						Services.
					</p>
					<p>
						Company reserves the right to discontinue or suspend, temporarily or
						permanently, the Services including ancillary services, by giving
						reasonable time period notice, on a best effort basis, unless it is
						merely to change certain features/contents of the Services and/or
						Website or maintain the security and integrity of the Services. You
						agree that Company will not be liable to you in any manner
						whatsoever for any modification or discontinuance of the Services.
					</p>
					<p>
						You agree not to use the Services and ancillary services for illegal
						purposes or for the transmission of material that is unlawful,
						harassing, libelous (untrue and damaging to others), invasive of
						another's privacy, abusive, threatening, or obscene, or that
						infringes the rights of other.
					</p>
					<p>
						Company may, from time to time, announce certain offers with intent
						to promote its Website and/or Services/ ancillary services
						("Promotional Offer/s"). The Promotional Offer(s) would always be
						governed by this TOU plus certain additional terms and conditions,
						if any prescribed. The said additional terms and conditions, if
						prescribed, would be specific to the corresponding Promotional Offer
						only and shall prevail over these TOU, to the extent they may be in
						conflict with these Terms. Company reserves the right to withdraw,
						discontinue, modify, extend and suspend the Promotional Offer(s) and
						the terms governing it, at its sole discretion.
					</p>
					<h4>14. General</h4>
					<p>
						If any of these conditions are deemed invalid, void, or for any
						reason unenforceable, the parties agree that the court should
						endeavor to give effect to the parties intentions as reflected in
						the provision, and the unenforceable condition shall be deemed
						severable and shall not affect the validity and enforceability of
						any remaining condition. Headings are for reference purposes only
						and do not limit the scope or extent of such section. This TOU and
						the relationship between you and Company will be governed by the
						laws of the India without regard to its conflict of law provisions.
						Any dispute, controversy or claim arising out of or in relation to
						this Agreement, including a breach or termination thereof, shall be
						settled by a sole arbitrator to be appointed mutually by Company and
						you, in accordance with the provisions of the Arbitration and
						Conciliation Act, 1996, or amendment thereto. In the event we are
						unable to reach an agreement on the sole arbitrator, we agree to
						have a panel of three arbitrators appointed, of which one shall be
						appointed by each of us, and the third arbitrator appointed by the
						two arbitrators. The venue for arbitration shall be Mumbai. The
						arbitral procedure shall be conducted in the English language and
						any award or awards shall be rendered in English. The Website
						specifically prohibits you from usage of any of its Services in
						countries or jurisdictions that do not corroborate to all
						stipulations of these Terms. The Website is specifically for users
						in the territory of India. In case of any dispute, either judicial
						or quasi-judicial, the same will be subject to the laws of India,
						with the courts in Mumbai having exclusive jurisdiction. The failure
						of Company to act with respect to a breach by you or others does not
						waive its right to act with respect to subsequent or similar
						breaches. This TOU constitutes the entire agreement between you and
						Company and governs your use of the Website, superseding any prior
						agreements between you and Company with respect to the Website
					</p>
					<p>
						NeoGrowth Credit Private Limited <br />
						CIN: U51504MH1993PTC251544 <br />
						802, Tower A, Peninsula Business Park, Ganpatrao Kadam Marg, Mumbai
						400013 <br />
						Email id:{" "}
						<a href="mailto:helpdesk@neogrowth.in">
							helpdesk@neogrowth.in
						</a>{" "}
						<br />
						Tel: 022 49219999
					</p>
					<p>
						If you have questions, concerns, or suggestions regarding our
						Privacy Policy, we can be reached using the contact information on
						our Contact Us page or at{" "}
						<a href="mailto:contact.us@neogrowth.in">contact.us@neogrowth.in</a>
					</p>
					<div
						className="close"
						onClick={() => {
							showmore(false);
							setCheck(true);
						}}
						style={{
							float: "none",
							textAlign: "center",
							color: "#28b04b",
							opacity: 1,
						}}
					>
						I Agree
					</div>
				</div>
				<div style={{ width: "10vw" }} onClick={() => showmore(false)}></div>
			</div>
			<div
				style={{ width: "100vw", height: "10vh" }}
				onClick={() => showmore(false)}
			></div>
		</div>
	);
};
export default TAndC;
