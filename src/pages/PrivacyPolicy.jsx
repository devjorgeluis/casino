import { useEffect, useState } from 'react';
import privacyEs from '../assets/privacy_policy_es.txt';

const PrivacyPolicy = () => {

  const pageTitle = "Política de Privacidad"
  const [text, setText] = useState('')

  const handleDisplayPrivacyPolicy = () => {
    fetch(privacyEs)
      .then((r) => r.text())
      .then(text => {
        setText(text)
      })
  }

  useEffect(() => {
    handleDisplayPrivacyPolicy()
  }, []);

  return (
    <div style={{whiteSpace: 'pre-line'}}>
        {text}
    </div>
  )
};

export default PrivacyPolicy;