const TITLE = 'Campus Experts India';

const GREETINGS: { [lang: string]: String } = {
	English: 			'Hello!',
	Hindi: 				'नमस्ते ।',
	Punjabi: 			'ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ ।',
	Bangla: 			'নমস্কার ।',
	Kashmiri: 			'आदाब ।',
	Urdu: 				'السلام عليكم۔',
	// Common for many Uttar Pradeshi and Bihari languages
	UPBihar: 			'𑂣𑂩𑂝𑂰𑂧 𑃀',
	Marathi: 			'नमस्कार ।',
	Gujarati: 			'નમસ્તે.',
	Tamil: 				'வணக்கம்.',
	Malayalam: 			'നമസ്കാരം.',
	Telugu: 			'నమస్కరం.',
	Kannada: 			'ನಮಸ್ತೆ.',
	Braj:				'राधे राधे ।',
	Odia: 				'ନମସ୍କାର ।',
	Tibetan: 			'བཀྲ་ཤིས་བདེ་ལེགས།',
	Manipuri:			'ꯈꯨꯔꯨꯝꯖꯔꯤ ꯫',
	Marwari: 			'𑅖𑅬𑅬𑅐 𑅘𑅢𑅑 ।',
	Mizo: 				'Chibai!',
	Ao: 				'Salem!',
	Chokri: 			'Vebatho!',
	Kokborok: 			'Khulumkha!'
};

const ANIMATION: { [k: string]: number } = {
	diff: 0.5,
	len: Object.keys(GREETINGS).length,
	charLen: 2
};

ANIMATION.frac = parseFloat((100 / ANIMATION.len).toFixed(4));

const AUDIO_VOLUME_UNIT = 0.02;
const AUDIO_TIME_SLICE = 200;

const FORM_LINK = 'https://docs.google.com/forms/d/e/1FAIpQLSdX6AocQg8d_g8Snq6vWxdOQN7p_Y6nCaeCWMKDfdsIZm8Pww/viewform?usp=sf_link';

export const title = TITLE;
export const greetings = GREETINGS;
export const animation = ANIMATION;
export const audioVolumeUnit = AUDIO_VOLUME_UNIT;
export const audioTimeSlice = AUDIO_TIME_SLICE;
export const formLink = FORM_LINK;