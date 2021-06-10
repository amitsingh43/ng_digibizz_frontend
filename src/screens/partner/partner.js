/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useLocation, useParams } from 'react-router-dom';

import 'styles/partner.css';
import { header_digital_services, update_lead, get_master_data, save_basic_details } from 'store/actions';
import { partnerMapping } from 'store/partner_mapping';
import { Form, DataSection, PartnerCard, PartnerDetails } from './components';

const Partner = () => {
	const masterData = useSelector((state) => state.masterData);
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();
	const [show, toggleShow] = useState({
		description: false,
		testimonials: false,
		about: false,
	});

	var { partner, category } = useParams();
	var data = partnerMapping.find(
		(val) => val.name === partner.toLowerCase().split('.').join(' ') && val.heading === category
	);

	const saveBasicDetails = function () {
		dispatch(save_basic_details(...arguments));
	};
	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(header_digital_services());
		if (masterData.cities.length === 0) {
			dispatch(get_master_data());
		}
	}, []);

	if ((!location || !location.state) && !data) {
		return <Redirect to="/services" />;
	}

	let {
		title,
		description,
		image,
		subTitle,
		tag,
		url,
		backgroundColor,
		stars,
		socialMedia,
		testimonials,
		aboutUs,
		carousel,
	} = data.partner;
	var { heading } = data;

	const _availNow = () => {
		if (localStorage.getItem('lead_id')) {
			const body = {
				lead_id: localStorage.getItem('lead_id'),
				partner_availed: title,
			};
			dispatch(update_lead(body));
			if ((title !== 'NeoGrowth') & url) {
				window.open(url, '_blank');
			}
		} else {
			let updatedTitle = title.split('.').join(' ');
			history.push(`/services/${heading}/${updatedTitle}/reg`);
		}
	};

	return (
		<div className={'servicesPartnerPage'}>
			<div className="partner-main" style={{ minHeight: '99vh', flex: 2.5 }}>
				<div className="partner-main-title">
					<span
						style={{ color: 'grey', fontWeight: 'normal', cursor: 'pointer' }}
						onClick={() => history.goBack()}
					>{`Explore services  >>  ${heading}  >>`}</span>
					<span>{`  ${title}`}</span>
				</div>
				<div
					style={{
						flex: 1,
						display: 'flex',
						// justifyContent: "center",
						marginTop: 30,
					}}
					className={'partner-section'}
				>
					<PartnerCard
						image={image}
						title={title}
						offer={subTitle}
						backgroundColor={backgroundColor}
						carousel={carousel}
					/>
					<PartnerDetails
						heading={heading}
						title={title}
						subTitle={subTitle}
						stars={stars}
						socialMedia={socialMedia}
						_availNow={_availNow}
						carouselLength={carousel.length}
					/>
				</div>
				{!localStorage.getItem('lead_id') && (
					<div style={{ flex: 1 }} className={'form-in-mobile'}>
						<Form masterData={masterData} url={url} save_basic_details={saveBasicDetails} title={title} />
					</div>
				)}
				<div className={'dataSection'}>
					<div id={'description'}>
						{description && (
							<DataSection
								title={'Description'}
								data={description}
								show={show}
								toggleShow={toggleShow}
								field={'description'}
							/>
						)}
					</div>
					<div id={'testimonials'}>
						{testimonials && (
							<DataSection
								title={'Testimonials'}
								data={testimonials}
								show={show}
								toggleShow={toggleShow}
								field={'testimonials'}
							/>
						)}
					</div>
					<div id={'about'}>
						{aboutUs && (
							<DataSection
								title={'About'}
								data={aboutUs}
								show={show}
								toggleShow={toggleShow}
								field={'about'}
							/>
						)}
					</div>
				</div>
			</div>
			{!localStorage.getItem('lead_id') && (
				<div style={{ flex: 1 }} className={'form-in-desktop'}>
					<Form masterData={masterData} url={url} save_basic_details={saveBasicDetails} title={title} />
				</div>
			)}
		</div>
	);
};

export default Partner;
