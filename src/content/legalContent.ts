export type LegalSection = {
  title: string
  paragraphs: string[]
}

export type LegalDocument = {
  eyebrow: string
  title: string
  summary: string
  overview: string[]
  statementTitle: string
  statement: string[]
  sections: LegalSection[]
}

export const privacyPolicy: LegalDocument = {
  eyebrow: 'Privacy Policy',
  title: 'Privacy Policy',
  summary:
    'This policy outlines how Press Archer Franklin may collect, use, store, and protect information shared through the website and related services.',
  overview: [
    'How information is protected',
    'What information may be collected',
    'How third parties may be involved',
    'How marketing communication is handled',
    'How policy updates are communicated',
  ],
  statementTitle: 'Policy statement',
  statement: [
    'Protecting user information is important to Press Archer Franklin. This page outlines how information may be collected, handled, secured, and updated in relation to the website and related services.',
  ],
  sections: [
    {
      title: 'Security',
      paragraphs: [
        'We store personal information in environments that use generally accepted security measures. Data transmitted through the internet cannot be guaranteed to be completely secure, so any information sent to us is done at your own risk.',
        'We work to maintain physical, electronic, and managerial safeguards that help protect the information we collect and store.',
      ],
    },
    {
      title: 'Information Collection',
      paragraphs: [
        'We may collect personal information such as your name, email address, phone number, and any other details you choose to provide when completing a form, contacting us, or using our services.',
        'We may also collect non-personal information such as browser type, device details, pages visited, and website usage statistics to help us improve performance and user experience.',
      ],
    },
    {
      title: 'Third Parties',
      paragraphs: [
        'We may share information with trusted third-party service providers who help us operate the website, process enquiries, deliver services, or support communication with users.',
        'These third parties are expected to use the information only for the purpose of supporting our services and according to their own applicable legal and privacy obligations.',
      ],
    },
    {
      title: 'Marketing',
      paragraphs: [
        'We may use your contact information to share service updates, announcements, and marketing messages that we believe are relevant to you.',
        'You can request to stop receiving marketing communication from us at any time by contacting Press Archer Franklin directly.',
      ],
    },
    {
      title: 'Changes in the Policy',
      paragraphs: [
        'This policy may be updated from time to time to reflect changes in our services, website features, or legal obligations.',
        'Any updates will be posted on this page, and continued use of the website after changes are published will be treated as acceptance of the revised policy.',
      ],
    },
  ],
}

export const termsOfUse: LegalDocument = {
  eyebrow: 'Terms of Use',
  title: 'Terms of Use',
  summary:
    'These terms describe the general conditions for using the Press Archer Franklin website, making enquiries, and interacting with the services presented online.',
  overview: [
    'How the website content should be used',
    'User responsibility for information submitted',
    'Service and third-party limitations',
    'How updates to these terms are applied',
    'How to contact Press Archer Franklin',
  ],
  statementTitle: 'Terms statement',
  statement: [
    'By using this website, you acknowledge that the information provided by Press Archer Franklin is for general service and communication purposes.',
    'Use of the website should be lawful, accurate, and consistent with the business services presented on the platform.',
  ],
  sections: [
    {
      title: 'Website Use',
      paragraphs: [
        'The website is intended to provide information about Press Archer Franklin and its financial service offering. Content should not be copied, misused, or presented as your own without permission.',
        'You agree to use the website in a lawful manner and not attempt to interfere with its operation, access controls, or connected services.',
      ],
    },
    {
      title: 'User Submissions',
      paragraphs: [
        'If you submit personal or business information through any enquiry, form, or communication channel, you are responsible for ensuring that the information provided is accurate and complete.',
        'Press Archer Franklin may rely on the information submitted to respond to enquiries, assess service suitability, or begin further communication.',
      ],
    },
    {
      title: 'Third-Party Services',
      paragraphs: [
        'Some parts of the website or service process may involve third-party tools, providers, or service partners. Press Archer Franklin is not responsible for the separate terms or privacy practices of those external parties.',
        'Users should review the relevant third-party policies where appropriate before relying on or submitting information through third-party tools.',
      ],
    },
    {
      title: 'No Guarantee of Availability',
      paragraphs: [
        'Press Archer Franklin may update, suspend, or change website features, service descriptions, or communication channels without prior notice.',
        'While the company aims to keep information current and accessible, uninterrupted availability of the website cannot be guaranteed at all times.',
      ],
    },
    {
      title: 'Changes to the Terms',
      paragraphs: [
        'These terms may be revised from time to time to reflect service updates, legal requirements, or changes in how the website is used.',
        'Continued use of the website after revised terms are published will be treated as acceptance of those updates.',
      ],
    },
  ],
}
