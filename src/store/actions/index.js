import {
	INCREMENT,
	DECREMENT,
	HOMEPAGE_DECREMENT,
	HOMEPAGE_INCREMENT,
	HEADER_DIGITAL_STATUS,
	HEADER_DIGITAL_SERVICES,
	HEADER_USER_GUIDE,
	HEADER_SUCCESS_STORIES,
	HEADER_RESET,
	SET_USER_DETAILS,
	ADD_ANSWER,
	SET_QUESTIONS,
	GET_QUESTIONS,
	SET_RECOMMENDATIONS,
	SET_RESULTS,
} from "../actionTypes/index";
import { _get, _post } from "../api";

const respone = {
	lead: {
		_id: "sswortmfwal5ddqtd7oklw",
		annual_turnover_master_id: "kswaqfjobsxzcvwefqiyvw",
		business_name: "Giri Inc",
		cities_master_id: "yzvcny40qbwetjexlpa4jg",
		created_at: "2021-01-21T10:52:58.690Z",
		email: "giridharsk@gmail.com",
		full_name: "Giridhar Sampath Kumar",
		industry_master_id: "ycopsayi-ppsmhndhtb7_w",
		mobile: "9962503104",
		updated_at: "2021-01-21T10:52:58.690Z",
	},
	message: "Thank you",
	questionnaire: [
		{
			_id: "6tutm_0vegqbxys6i5vgng",
			created_at: "2021-01-21T10:52:10.846Z",
			industry_master_id: "ycopsayi-ppsmhndhtb7_w",
			name: "Digital Discovery",
			updated_at: "2021-01-21T10:52:11.467Z",
			weight: 20,
			questionnaire_section_questions: [
				{
					_id: "siytnfu8naxmgu1hzut_qg",
					created_at: "2021-01-21T10:52:11.318Z",
					multiple: true,
					name:
						"Tick all the options below where your business is present online",
					questionnaire_section_id: "6tutm_0vegqbxys6i5vgng",
					updated_at: "2021-01-21T10:52:11.446Z",
					weight: 15,
					questionnaire_section_answers: [
						{
							_id: "sasxb5cuny7cvbnoidga_q",
							created_at: "2021-01-21T10:52:11.372Z",
							name: "Google Business",
							questionnaire_section_question_id: "siytnfu8naxmgu1hzut_qg",
							updated_at: "2021-01-21T10:52:11.372Z",
							weight: 3,
						},
						{
							_id: "xwjyavgczvi8bviolwzd6g",
							created_at: "2021-01-21T10:52:11.426Z",
							name: "Facebook or Instagram",
							questionnaire_section_question_id: "siytnfu8naxmgu1hzut_qg",
							updated_at: "2021-01-21T10:52:11.426Z",
							weight: 2,
						},
						{
							_id: "vrvnakvd44xzd6l9fhcieg",
							created_at: "2021-01-21T10:52:11.431Z",
							name: "WhatsApp Business",
							questionnaire_section_question_id: "siytnfu8naxmgu1hzut_qg",
							updated_at: "2021-01-21T10:52:11.431Z",
							weight: 3,
						},
						{
							_id: "yduqmsumsalgg8grsekm7w",
							created_at: "2021-01-21T10:52:11.435Z",
							name: "Justdial or Sulekha or AskLaila",
							questionnaire_section_question_id: "siytnfu8naxmgu1hzut_qg",
							updated_at: "2021-01-21T10:52:11.435Z",
							weight: 2,
						},
						{
							_id: "mlcnktgmgn8xw0pzen4oqg",
							created_at: "2021-01-21T10:52:11.439Z",
							name: "Own Website or Mobile App",
							questionnaire_section_question_id: "siytnfu8naxmgu1hzut_qg",
							updated_at: "2021-01-21T10:52:11.439Z",
							weight: 3,
						},
						{
							_id: "i7muybbgod2zzoe04helqw",
							created_at: "2021-01-21T10:52:11.443Z",
							name:
								"Any of the Loyalty platforms (Eg: Magicpin, Dineout, etc.)",
							questionnaire_section_question_id: "siytnfu8naxmgu1hzut_qg",
							updated_at: "2021-01-21T10:52:11.443Z",
							weight: 2,
						},
					],
				},
				{
					_id: "xencor-ircokv5hh4keubw",
					created_at: "2021-01-21T10:52:11.452Z",
					multiple: false,
					name: "Do you sell online?",
					questionnaire_section_id: "6tutm_0vegqbxys6i5vgng",
					updated_at: "2021-01-21T10:52:11.463Z",
					weight: 5,
					questionnaire_section_answers: [
						{
							_id: "28axg78ytwaajk8en1o_-g",
							created_at: "2021-01-21T10:52:11.457Z",
							name: "Yes",
							questionnaire_section_question_id: "xencor-ircokv5hh4keubw",
							updated_at: "2021-01-21T10:52:11.457Z",
							weight: 5,
						},
						{
							_id: "wi5lam5clbcpztt-npe9fw",
							created_at: "2021-01-21T10:52:11.460Z",
							name: "No",
							questionnaire_section_question_id: "xencor-ircokv5hh4keubw",
							updated_at: "2021-01-21T10:52:11.460Z",
							weight: 0,
						},
					],
				},
			],
		},
		{
			_id: "upffdtscnx2zhnr_tueibw",
			created_at: "2021-01-21T10:52:10.912Z",
			industry_master_id: "ycopsayi-ppsmhndhtb7_w",
			name: "Digital Fulfillment",
			updated_at: "2021-01-21T10:52:11.858Z",
			weight: 20,
			questionnaire_section_questions: [
				{
					_id: "w0e-ebzxj3c1scrdcohnuq",
					created_at: "2021-01-21T10:52:11.834Z",
					multiple: true,
					name: "Do you deliver your products / services?",
					questionnaire_section_id: "upffdtscnx2zhnr_tueibw",
					updated_at: "2021-01-21T10:52:11.854Z",
					weight: 20,
					questionnaire_section_answers: [
						{
							_id: "wcfb6nnquwytj2o_rmcj8a",
							created_at: "2021-01-21T10:52:11.839Z",
							name: "I don't deliver currently",
							questionnaire_section_question_id: "w0e-ebzxj3c1scrdcohnuq",
							updated_at: "2021-01-21T10:52:11.839Z",
							weight: 0,
						},
						{
							_id: "rgt_f-sbdyprrsihcnebcq",
							created_at: "2021-01-21T10:52:11.843Z",
							name: "I have my own staff for deliveries",
							questionnaire_section_question_id: "w0e-ebzxj3c1scrdcohnuq",
							updated_at: "2021-01-21T10:52:11.843Z",
							weight: 2,
						},
						{
							_id: "isgcgq4sezjr7zzdragayq",
							created_at: "2021-01-21T10:52:11.847Z",
							name:
								"I use online apps such as Swiggy, Zomato, Dunzo, Shiprocket, Pikr, etc",
							questionnaire_section_question_id: "w0e-ebzxj3c1scrdcohnuq",
							updated_at: "2021-01-21T10:52:11.847Z",
							weight: 15,
						},
						{
							_id: "7-3cz1teonkgd6gesu9vxg",
							created_at: "2021-01-21T10:52:11.851Z",
							name: "I use courier partners such as BlueDart, DHL, etc",
							questionnaire_section_question_id: "w0e-ebzxj3c1scrdcohnuq",
							updated_at: "2021-01-21T10:52:11.851Z",
							weight: 3,
						},
					],
				},
			],
		},
		{
			_id: "5ntb2tca0dohvrfycodrza",
			created_at: "2021-01-21T10:52:10.920Z",
			industry_master_id: "ycopsayi-ppsmhndhtb7_w",
			name: "Digital Transactions",
			updated_at: "2021-01-21T10:52:12.033Z",
			weight: 20,
			questionnaire_section_questions: [
				{
					_id: "_etdwqepbkqejrayke6sdq",
					created_at: "2021-01-21T10:52:12.003Z",
					multiple: true,
					name:
						"Tick the options below by which you accept payments from your customers",
					questionnaire_section_id: "5ntb2tca0dohvrfycodrza",
					updated_at: "2021-01-21T10:52:12.029Z",
					weight: 20,
					questionnaire_section_answers: [
						{
							_id: "l6du7mztsm53mvtlmrcp_g",
							created_at: "2021-01-21T10:52:12.008Z",
							name: "Cash",
							questionnaire_section_question_id: "_etdwqepbkqejrayke6sdq",
							updated_at: "2021-01-21T10:52:12.008Z",
							weight: 0,
						},
						{
							_id: "vyhb_gghrv_ptxaev4766q",
							created_at: "2021-01-21T10:52:12.012Z",
							name: "UPI (Eg: Gpay, PhonePe, PayTM, Amazon Pay, etc)",
							questionnaire_section_question_id: "_etdwqepbkqejrayke6sdq",
							updated_at: "2021-01-21T10:52:12.012Z",
							weight: 10,
						},
						{
							_id: "16gtggxkab32rc22gog3gw",
							created_at: "2021-01-21T10:52:12.016Z",
							name: "Credit & Debit Cards over POS",
							questionnaire_section_question_id: "_etdwqepbkqejrayke6sdq",
							updated_at: "2021-01-21T10:52:12.016Z",
							weight: 7,
						},
						{
							_id: "l5qst9f4tz8yaj9wlidnrg",
							created_at: "2021-01-21T10:52:12.020Z",
							name: "IMPS / NEFT / RTGS",
							questionnaire_section_question_id: "_etdwqepbkqejrayke6sdq",
							updated_at: "2021-01-21T10:52:12.020Z",
							weight: 3,
						},
						{
							_id: "idhisy0c7jgqd426y_az4q",
							created_at: "2021-01-21T10:52:12.024Z",
							name: "Cheques",
							questionnaire_section_question_id: "_etdwqepbkqejrayke6sdq",
							updated_at: "2021-01-21T10:52:12.024Z",
							weight: 0,
						},
					],
				},
			],
		},
		{
			_id: "naayzan8dj_sxr0g5cpajq",
			created_at: "2021-01-21T10:52:10.928Z",
			industry_master_id: "ycopsayi-ppsmhndhtb7_w",
			name: "Digital Operations",
			updated_at: "2021-01-21T10:52:12.306Z",
			weight: 20,
			questionnaire_section_questions: [
				{
					_id: "osfauzdlhr5jcqkudcvueg",
					created_at: "2021-01-21T10:52:12.266Z",
					multiple: true,
					name: "Tick the activities below, which you do via digital methods",
					questionnaire_section_id: "naayzan8dj_sxr0g5cpajq",
					updated_at: "2021-01-21T10:52:12.301Z",
					weight: 20,
					questionnaire_section_answers: [
						{
							_id: "5jea_rlqkwzk_ubzf_yedw",
							created_at: "2021-01-21T10:52:12.271Z",
							name: "GST & Income Tax Filing",
							questionnaire_section_question_id: "osfauzdlhr5jcqkudcvueg",
							updated_at: "2021-01-21T10:52:12.271Z",
							weight: 2,
						},
						{
							_id: "n2f33t9bob4ph9nw5h0c2w",
							created_at: "2021-01-21T10:52:12.275Z",
							name: "Stock Management",
							questionnaire_section_question_id: "osfauzdlhr5jcqkudcvueg",
							updated_at: "2021-01-21T10:52:12.275Z",
							weight: 3,
						},
						{
							_id: "a3syy7lqibc0j1zhmamdiw",
							created_at: "2021-01-21T10:52:12.279Z",
							name: "Bookkeeping",
							questionnaire_section_question_id: "osfauzdlhr5jcqkudcvueg",
							updated_at: "2021-01-21T10:52:12.279Z",
							weight: 3,
						},
						{
							_id: "j03h75ijeh5bxvqy9uukka",
							created_at: "2021-01-21T10:52:12.283Z",
							name: "Billing & Accounting",
							questionnaire_section_question_id: "osfauzdlhr5jcqkudcvueg",
							updated_at: "2021-01-21T10:52:12.283Z",
							weight: 5,
						},
						{
							_id: "oldxhzfjoe58fo1kvntl_g",
							created_at: "2021-01-21T10:52:12.287Z",
							name: "Legal Services",
							questionnaire_section_question_id: "osfauzdlhr5jcqkudcvueg",
							updated_at: "2021-01-21T10:52:12.287Z",
							weight: 2,
						},
						{
							_id: "ure8v3m2nbdhsmuovme2aw",
							created_at: "2021-01-21T10:52:12.291Z",
							name: "Availing insurance products",
							questionnaire_section_question_id: "osfauzdlhr5jcqkudcvueg",
							updated_at: "2021-01-21T10:52:12.291Z",
							weight: 1,
						},
						{
							_id: "5agupoyzwxj-p5wlrdv_aa",
							created_at: "2021-01-21T10:52:12.295Z",
							name: "Staff Management",
							questionnaire_section_question_id: "osfauzdlhr5jcqkudcvueg",
							updated_at: "2021-01-21T10:52:12.295Z",
							weight: 2,
						},
						{
							_id: "71p1lumtf2crgakbrcaijq",
							created_at: "2021-01-21T10:52:12.298Z",
							name: "Credit/Udhaar to Customers",
							questionnaire_section_question_id: "osfauzdlhr5jcqkudcvueg",
							updated_at: "2021-01-21T10:52:12.298Z",
							weight: 2,
						},
					],
				},
			],
		},
		{
			_id: "jysafugfgxbtdjtjes4xpg",
			created_at: "2021-01-21T10:52:10.941Z",
			industry_master_id: "ycopsayi-ppsmhndhtb7_w",
			name: "Digital Engagement",
			updated_at: "2021-01-21T10:52:12.672Z",
			weight: 20,
			questionnaire_section_questions: [
				{
					_id: "lrosdalnywwrz6s0ry5lva",
					created_at: "2021-01-21T10:52:12.632Z",
					multiple: true,
					name: "How do you engage with your customers digitally?",
					questionnaire_section_id: "jysafugfgxbtdjtjes4xpg",
					updated_at: "2021-01-21T10:52:12.667Z",
					weight: 20,
					questionnaire_section_answers: [
						{
							_id: "7m06cgtjokvctyugljyksg",
							created_at: "2021-01-21T10:52:12.637Z",
							name: "Ratings and Reviews",
							questionnaire_section_question_id: "lrosdalnywwrz6s0ry5lva",
							updated_at: "2021-01-21T10:52:12.637Z",
							weight: 3,
						},
						{
							_id: "xwy4no9c82fzhbyk-g_3sg",
							created_at: "2021-01-21T10:52:12.641Z",
							name:
								"Send Updates on Offers & Discounts SMS / Email / WhatsApp Message",
							questionnaire_section_question_id: "lrosdalnywwrz6s0ry5lva",
							updated_at: "2021-01-21T10:52:12.641Z",
							weight: 5,
						},
						{
							_id: "jstzcxoitkysy7a9l3xp6a",
							created_at: "2021-01-21T10:52:12.646Z",
							name: "Run Loyalty Programs",
							questionnaire_section_question_id: "lrosdalnywwrz6s0ry5lva",
							updated_at: "2021-01-21T10:52:12.646Z",
							weight: 3,
						},
						{
							_id: "urmrtymlttvlxjwau7y3ga",
							created_at: "2021-01-21T10:52:12.650Z",
							name: "Take regular feedback",
							questionnaire_section_question_id: "lrosdalnywwrz6s0ry5lva",
							updated_at: "2021-01-21T10:52:12.650Z",
							weight: 2,
						},
						{
							_id: "ikvrpiayz5s5245ys-ym5a",
							created_at: "2021-01-21T10:52:12.654Z",
							name: "Through Chatbots",
							questionnaire_section_question_id: "lrosdalnywwrz6s0ry5lva",
							updated_at: "2021-01-21T10:52:12.654Z",
							weight: 2,
						},
						{
							_id: "guf49bg0_4gqgvoaurqx0g",
							created_at: "2021-01-21T10:52:12.660Z",
							name: "Address Customer Complaints Online",
							questionnaire_section_question_id: "lrosdalnywwrz6s0ry5lva",
							updated_at: "2021-01-21T10:52:12.660Z",
							weight: 2,
						},
						{
							_id: "isjxim0nyks3mdloxwv1uw",
							created_at: "2021-01-21T10:52:12.665Z",
							name: "LED Displays at Store",
							questionnaire_section_question_id: "lrosdalnywwrz6s0ry5lva",
							updated_at: "2021-01-21T10:52:12.665Z",
							weight: 3,
						},
					],
				},
			],
		},
	],
};

const report = {
	message: "Thank you",
	recommendations: [
		{
			_id: "uoba0w8xgpjoju7kn06--w",
			category: "social_media_marketing",
			created_at: "2021-01-22T06:36:32.521Z",
			default_shown: true,
			name:
				"You can make the presence of your business felt across the web and targeted towards your customers.",
			priority: 3,
			updated_at: "2021-01-22T06:36:32.521Z",
		},
		{
			_id: "qi9gzw6nzh_3lyl8a2-hmq",
			category: "sell_online",
			created_at: "2021-01-22T06:36:32.577Z",
			default_shown: true,
			name:
				"It is possible to grow your business manifold by selling online and connecting with customers beyond your location.",
			priority: 3,
			updated_at: "2021-01-22T06:36:32.577Z",
		},
		{
			_id: "y_yuscoeps75b-t6igfvga",
			category: "billing_and_accounting",
			created_at: "2021-01-22T06:36:32.591Z",
			default_shown: true,
			name:
				"You can manage your entire process from inventory management, billing, expenses, order management and save lot of time and manual effort.",
			priority: 3,
			updated_at: "2021-01-22T06:36:32.591Z",
		},
		{
			_id: "nkdkpqzf3lo-sgto7t-8rg",
			category: "business_loans",
			created_at: "2021-01-22T06:36:32.607Z",
			default_shown: true,
			name:
				"You can avail quick, easy and flexible business loans up to 75 Lacs for all aspects for your business.",
			priority: 2,
			updated_at: "2021-01-22T06:36:32.607Z",
		},
		{
			_id: "wz7f5sn4roiyyjcrfr8x-a",
			category: "insurance",
			created_at: "2021-01-22T06:36:32.611Z",
			default_shown: true,
			name:
				"You are most important to your business. You can secure yourself and your business now with various Insurance products.",
			priority: 2,
			updated_at: "2021-01-22T06:36:32.611Z",
		},
	],
	section_results: {
		"Digital Discovery": {
			score: 8,
			maximum: 20,
			percentage: 40,
		},
		"Digital Fulfillment": {
			score: 15,
			maximum: 20,
			percentage: 75,
		},
		"Digital Transactions": {
			score: 0,
			maximum: 20,
			percentage: 0,
		},
		"Digital Operations": {
			score: 2,
			maximum: 20,
			percentage: 10,
		},
		"Digital Engagement": {
			score: 3,
			maximum: 20,
			percentage: 15,
		},
	},
	questionnaire_take: {
		_id: {
			$oid: "600a8c0db4e8e907b37d5763",
		},
		created_at: "2021-01-22T08:25:49.652Z",
		lead_id: "0kaa8c2lwhejea50dhh3pa",
		max_overall: 100,
		overall_score: 28.0,
		percentage: 28,
		updated_at: "2021-01-22T08:25:49.866Z",
	},
};

const { questionnaire, lead } = respone;
export const { recommendations, section_results, questionnaire_take } = report;

export const increment = () => {
	return {
		type: INCREMENT,
	};
};
export const decrement = () => {
	return {
		type: DECREMENT,
	};
};

export const homepage_increment = () => {
	return {
		type: HOMEPAGE_INCREMENT,
	};
};

export const homepage_decrement = () => {
	return {
		type: HOMEPAGE_DECREMENT,
	};
};
export const header_digital_status = () => {
	return {
		type: HEADER_DIGITAL_STATUS,
	};
};
export const header_digital_services = () => {
	return {
		type: HEADER_DIGITAL_SERVICES,
	};
};
export const header_user_guide = () => {
	return {
		type: HEADER_USER_GUIDE,
	};
};
export const header_success_stories = () => {
	return {
		type: HEADER_SUCCESS_STORIES,
	};
};
export const header_reset = () => {
	return {
		type: HEADER_RESET,
	};
};
export const set_user_details = (details) => {
	return {
		type: SET_USER_DETAILS,
		payload: details,
	};
};

export const get_api_call = () => async (dispatch) => {
	try {
		const response = await _get();
		dispatch(set_user_details(response));
	} catch (error) {
		alert(error);
	}
};
export function post_api_call() {
	return (dispatch) => {
		dispatch(_post);
	};
}
export const add_answer = (answer_id) => {
	return {
		type: ADD_ANSWER,
		payload: answer_id,
	};
};
export const set_questions = (questions) => {
	return {
		type: SET_QUESTIONS,
		payload: questions,
	};
};
export const get_section_questions = (counter) => {
	return {
		type: GET_QUESTIONS,
		payload: counter,
	};
};
export const get_questions_from_api = () => async (dispatch) => {
	try {
		await dispatch(set_questions(questionnaire));
	} catch (error) {
		alert(error);
	}
};
export const set_recommendations_write = (recommendations) => {
	return {
		type: SET_RECOMMENDATIONS,
		payload: recommendations,
	};
};
export const set_recommendations = () => async (dispatch) => {
	try {
		await dispatch(set_recommendations_write(recommendations));
	} catch (error) {
		alert(error);
	}
};
export const test_user = () => (dispatch) => {
	dispatch(set_user_details(lead));
};
export const set_results = (results) => {
	return {
		type: SET_RESULTS,
		payload: results,
	};
};
export const dispatch_results = () => (dispatch) => {
	dispatch(set_results({ section_results, questionnaire_take }));
};
