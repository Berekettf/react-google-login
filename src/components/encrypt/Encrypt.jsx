import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import './encrypt.css'; // Import the CSS file

const Encrypt = () => {
  const [inputText, setInputText] = useState('');
  const [encryptionKey, setEncryptionKey] = useState('');
  const [encryptedText, setEncryptedText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyChange = (e) => {
    setEncryptionKey(e.target.value);
  };

  const handleAesEncrypt = () => {
    try {
      const encrypted = CryptoJS.AES.encrypt(inputText, encryptionKey).toString();
      setEncryptedText(encrypted);
    } catch (error) {
      console.error('AES encryption error:', error);
    }
  };

  const handleOtpEncrypt = () => {
    try {
      let encryptedText = '';
      for (let i = 0; i < inputText.length; i++) {
        const plainChar = inputText.charCodeAt(i);
        const keyChar = encryptionKey.charCodeAt(i % encryptionKey.length);
        const encryptedChar = String.fromCharCode(plainChar ^ keyChar);
        encryptedText += encryptedChar;
      }
      setEncryptedText(encryptedText);
    } catch (error) {
      console.error('OTP encryption error:', error);
    }
  };

  return (
    <div className="encrypt-container">
      <h2>Encryption</h2>
      <div>
        <label htmlFor="inputText">Enter text to encrypt:</label>
        <textarea
          id="inputText"
          value={inputText}
          onChange={handleInputChange}
          rows={5}
          cols={50}
        />
      </div>
      <div>
        <label htmlFor="encryptionKey">Enter the encryption key:</label>
        <input
          type="text"
          id="encryptionKey"
          value={encryptionKey}
          onChange={handleKeyChange}
        />
      </div>
      <button onClick={handleAesEncrypt}>AES Encrypt</button>
      <button onClick={handleOtpEncrypt}>OTP Encrypt</button>
      <div>
        <label htmlFor="encryptedText">Encrypted Text:</label>
        <textarea
          id="encryptedText"
          value={encryptedText}
          readOnly
          rows={5}
          cols={50}
        />
      </div>
    </div>
  );
};

export default Encrypt;
