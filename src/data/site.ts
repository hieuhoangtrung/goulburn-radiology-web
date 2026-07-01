// ─── Goulburn Radiology – Static Site Data ──────────────────────────────────
// Single source of truth for all content, replacing Contentful CMS.

export const META = {
  siteName: 'Goulburn Radiology',
  title: 'Goulburn Radiology | Medical Imaging in Goulburn, NSW',
  description:
    'Goulburn Radiology provides expert medical imaging services including X-Ray, MRI, CT, Ultrasound, and more in Goulburn, NSW. Bulk billing available.',
  url: 'https://www.goulburnradiology.com.au',
  image: 'https://www.goulburnradiology.com.au/og-image.jpg',
  locale: 'en_AU',
};

export const BUSINESS = {
  type: 'MedicalClinic',
  phone: '(02) 4821 5733',
  fax: '(02) 4822 5600',
  email: 'admin@goulburnradiology.com.au',
  addressStreet: '135 Sloane Street',
  addressLocality: 'Goulburn',
  addressRegion: 'NSW',
  postalCode: '2580',
  addressCountry: 'AU',
  areaServed: ['Goulburn', 'Southern Tablelands', 'NSW'],
  geo: { latitude: -34.7538, longitude: 149.7195 },
  hours: [
    { days: 'Monday – Friday', hours: '8:00 am – 5:30 pm' },
    { days: 'Saturday', hours: '8:30 am – 12:30 pm' },
    { days: 'Sunday & Public Holidays', hours: 'Closed' },
  ],
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.1!2d149.7175!3d-34.7538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s135+Sloane+St+Goulburn+NSW+2580!5e0!3m2!1sen!2sau!4v1',
};

export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  icon: string;
  description: string;
  indications: string[];
  preparation: string;
  duration: string;
  bulkBilled: boolean;
}

export const SERVICES: Service[] = [
  {
    slug: 'x-ray',
    title: 'X-Ray',
    shortDesc: 'Fast, accurate plain film radiography for bones and chest.',
    icon: '🦴',
    description:
      'X-ray (radiography) is one of the most commonly used diagnostic tools in medicine. Our digital X-ray equipment produces high-quality images with minimal radiation exposure, helping clinicians diagnose fractures, infections, lung conditions and more.',
    indications: [
      'Suspected fractures or bone injuries',
      'Chest infections or pneumonia',
      'Arthritis assessment',
      'Foreign body detection',
      'Pre-operative assessment',
    ],
    preparation: 'No preparation is usually required. Please wear comfortable clothing and remove jewellery from the area being examined.',
    duration: '10–20 minutes',
    bulkBilled: true,
  },
  {
    slug: 'ct-scan',
    title: 'CT Scan',
    shortDesc: 'High-resolution cross-sectional imaging for detailed diagnosis.',
    icon: '🧠',
    description:
      'Computed Tomography (CT) combines X-ray images taken from many angles with computer processing to create detailed cross-sectional images of bones, blood vessels and soft tissues. Our modern 64-slice CT scanner delivers fast, high-quality scans with reduced radiation dose.',
    indications: [
      'Head and brain assessment',
      'Abdominal and pelvic conditions',
      'Chest and lung disorders',
      'Vascular disease',
      'Cancer staging',
      'Trauma assessment',
    ],
    preparation:
      'For abdominal CT you may need to fast for 4 hours and drink oral contrast. Some scans require IV contrast – please advise us of any allergies or kidney problems.',
    duration: '15–30 minutes',
    bulkBilled: false,
  },
  {
    slug: 'mri',
    title: 'MRI',
    shortDesc: 'Detailed soft-tissue imaging using magnetic resonance.',
    icon: '🔬',
    description:
      'Magnetic Resonance Imaging (MRI) uses a powerful magnetic field and radio waves – no ionising radiation – to produce detailed images of soft tissues, joints, the brain and spine. It is particularly valuable for neurological, musculoskeletal and oncological assessment.',
    indications: [
      'Brain and spinal cord disorders',
      'Joint injuries (knee, shoulder, hip)',
      'Soft tissue tumours',
      'Pelvic and abdominal organs',
      'Cardiac assessment',
    ],
    preparation:
      'Remove all metal objects. Inform staff if you have a pacemaker, cochlear implant or other implanted device. Fasting may be required for abdominal scans.',
    duration: '30–60 minutes',
    bulkBilled: false,
  },
  {
    slug: 'ultrasound',
    title: 'Ultrasound',
    shortDesc: 'Real-time imaging using sound waves – safe for all ages.',
    icon: '💓',
    description:
      'Ultrasound uses high-frequency sound waves to create real-time images of internal organs, blood vessels and developing babies. It is completely safe, involves no radiation, and is suitable for patients of all ages including pregnant women.',
    indications: [
      'Obstetric (pregnancy) monitoring',
      'Abdominal organ assessment',
      'Thyroid and neck',
      'Musculoskeletal injuries',
      'Vascular (Doppler) studies',
      'Guided biopsies',
    ],
    preparation:
      'Preparation varies by examination. Abdominal scans require 4–6 hours fasting; pelvic scans require a full bladder. We will advise you when booking.',
    duration: '20–45 minutes',
    bulkBilled: true,
  },
  {
    slug: 'dexa-scan',
    title: 'DEXA / Bone Density',
    shortDesc: 'Gold-standard bone mineral density assessment.',
    icon: '🦷',
    description:
      'Dual-Energy X-ray Absorptiometry (DEXA) is the gold-standard test for measuring bone mineral density. It helps diagnose osteoporosis and assess fracture risk, enabling early preventive treatment.',
    indications: [
      'Osteoporosis screening and monitoring',
      'Post-menopausal women',
      'Men over 60',
      'Long-term steroid use',
      'Monitoring bone density treatment response',
    ],
    preparation: 'No special preparation required. Avoid calcium supplements 24 hours before the scan.',
    duration: '15–20 minutes',
    bulkBilled: true,
  },
  {
    slug: 'mammography',
    title: 'Mammography',
    shortDesc: 'Specialised breast imaging for screening and diagnosis.',
    icon: '🎗️',
    description:
      'Mammography is a specialised X-ray of the breast used for both routine screening and diagnostic assessment of breast symptoms. Our digital mammography system provides high-resolution images to assist in the early detection of breast cancer.',
    indications: [
      'Breast cancer screening (BreastScreen)',
      'Assessment of breast lumps or pain',
      'Nipple discharge investigation',
      'Follow-up after breast surgery',
    ],
    preparation:
      'Do not use deodorant, talcum powder or lotion on your underarms or breasts on the day of the exam. Wear a two-piece outfit for easy undressing.',
    duration: '20–30 minutes',
    bulkBilled: true,
  },
  {
    slug: 'fluoroscopy',
    title: 'Fluoroscopy',
    shortDesc: 'Real-time X-ray for dynamic assessment of body systems.',
    icon: '🩺',
    description:
      'Fluoroscopy is a type of real-time X-ray imaging that allows our radiologists to observe moving body structures. It is commonly used for gastrointestinal studies, joint injections and other guided procedures.',
    indications: [
      'Barium swallow and meal studies',
      'Joint and spinal injections',
      'Hysterosalpingography (HSG)',
      'Cystourethrography',
    ],
    preparation:
      'Preparation is specific to the type of study. We will provide detailed instructions when you book your appointment.',
    duration: '30–60 minutes',
    bulkBilled: false,
  },
  {
    slug: 'interventional',
    title: 'Interventional Radiology',
    shortDesc: 'Minimally invasive image-guided procedures.',
    icon: '⚕️',
    description:
      'Interventional radiology uses imaging guidance to perform minimally invasive procedures that diagnose and treat a variety of conditions. These procedures typically involve smaller incisions, shorter recovery times and fewer complications than open surgery.',
    indications: [
      'CT-guided biopsies',
      'Drainage of fluid collections',
      'Joint and soft tissue injections',
      'Vascular access procedures',
    ],
    preparation:
      'Preparation depends on the specific procedure. Our team will contact you prior to your appointment with tailored instructions.',
    duration: 'Varies by procedure',
    bulkBilled: false,
  },
];

export const TEAM = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Radiologist – Fellowship in Neuroradiology',
    bio: 'Dr. Mitchell completed her radiology training at Royal Prince Alfred Hospital and holds a fellowship in neuroradiology. She has a special interest in brain and spine imaging.',
    initials: 'SM',
  },
  {
    name: 'Dr. James Okoye',
    role: 'Radiologist – Fellowship in Musculoskeletal Imaging',
    bio: 'Dr. Okoye brings expertise in sports and musculoskeletal radiology, with extensive experience in ultrasound-guided procedures and MRI of joints.',
    initials: 'JO',
  },
  {
    name: 'Dr. Linda Zhao',
    role: 'Radiologist – Fellowship in Breast Imaging',
    bio: 'Dr. Zhao is our breast imaging specialist, with subspecialty training in mammography and breast MRI. She is committed to early cancer detection.',
    initials: 'LZ',
  },
  {
    name: 'Dr. Marcus Webb',
    role: 'Radiologist – General & Interventional',
    bio: 'Dr. Webb has broad expertise across general radiology and image-guided interventional procedures, serving the Goulburn community for over 15 years.',
    initials: 'MW',
  },
];

export const FAQS = [
  {
    question: 'Do I need a referral?',
    answer:
      'Most imaging studies require a referral from a GP or specialist. Medicare bulk billing is generally only available with a valid referral. Walk-in appointments may be available for some services at out-of-pocket cost.',
  },
  {
    question: 'Is bulk billing available?',
    answer:
      'Yes. Bulk billing is available for many services including X-Ray, Ultrasound, DEXA and Mammography when you have a valid Medicare card and referral. Please enquire when booking as conditions apply.',
  },
  {
    question: 'How long will I wait for my results?',
    answer:
      'Our radiologists aim to report routine examinations within 24–48 hours. Urgent and emergency reports are available immediately. Results are sent directly to your referring doctor.',
  },
  {
    question: 'What should I bring to my appointment?',
    answer:
      'Please bring your referral form, Medicare card, any relevant previous imaging (CDs or reports), and your health fund card if applicable. Arrive 10 minutes early to complete paperwork.',
  },
  {
    question: 'Is MRI safe if I have metal implants?',
    answer:
      'Some metal implants are compatible with MRI and some are not. Please inform us of all implants, devices or foreign bodies when booking. We will assess safety before your appointment.',
  },
  {
    question: 'Can I bring someone with me?',
    answer:
      'Yes. You are welcome to bring a support person. However, they may not be able to remain in the imaging room during the procedure due to radiation safety requirements.',
  },
  {
    question: 'What if I am claustrophobic?',
    answer:
      'Please let us know when booking. We can discuss strategies to help manage anxiety during MRI or CT. In some cases, sedation can be arranged through your referring doctor.',
  },
  {
    question: 'Do you provide after-hours services?',
    answer:
      'Our practice is open Monday to Friday 8:00 am – 5:30 pm and Saturday 8:30 am – 12:30 pm. Emergency imaging is available through Goulburn Base Hospital outside these hours.',
  },
];

export const REFERRER_INFO = {
  intro:
    'Goulburn Radiology provides a comprehensive referral service for GPs, specialists and allied health professionals across the Southern Tablelands region. We are committed to timely, high-quality reporting and close communication with referrers.',
  features: [
    {
      title: 'Online Referrals',
      desc: 'Submit referrals electronically via your practice management software or fax to (02) 4822 5600.',
      icon: '📋',
    },
    {
      title: 'Rapid Reporting',
      desc: 'Routine reports within 24–48 hours. Urgent reports available same day or immediately for emergencies.',
      icon: '⚡',
    },
    {
      title: 'Direct Communication',
      desc: 'Our radiologists are available to discuss cases directly. Contact us on (02) 4821 5733.',
      icon: '📞',
    },
    {
      title: 'Results Delivery',
      desc: 'Reports delivered via your preferred method: fax, secure messaging (Argus/Medical Objects), or patient collection.',
      icon: '📨',
    },
    {
      title: 'Prior Images',
      desc: 'We maintain a comprehensive archive of prior studies, enabling meaningful comparison reporting.',
      icon: '🗂️',
    },
    {
      title: 'Subspecialty Expertise',
      desc: 'Fellowship-trained subspecialists in neuroradiology, MSK, breast imaging, and interventional procedures.',
      icon: '🎓',
    },
  ],
  downloadForms: [
    { label: 'Referral Form (PDF)', href: '/forms/referral-form.pdf' },
    { label: 'Patient Consent Form', href: '/forms/consent-form.pdf' },
  ],
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'For Referrers', href: '/referrers' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];
