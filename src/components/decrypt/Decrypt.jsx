import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import './decrypt.css'; // Import the CSS file

const Decrypt = () => {
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptionKey, setDecryptionKey] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const handleEncryptedTextChange = (e) => {
    setEncryptedText(e.target.value);
  };

  const handleKeyChange = (e) => {
    setDecryptionKey(e.target.value);
  };

  const handleAesDecrypt = () => {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedText, decryptionKey);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      setDecryptedText(decrypted);
    } catch (error) {
      console.error('AES decryption error:', error);
    }
  };

  const handleOtpDecrypt = () => {
    try {
      let decryptedText = '';
      for (let i = 0; i < encryptedText.length; i++) {
        const encryptedChar = encryptedText.charCodeAt(i);
        const keyChar = decryptionKey.charCodeAt(i % decryptionKey.length);
        const decryptedChar = String.fromCharCode(encryptedChar ^ keyChar);
        decryptedText += decryptedChar;
      }
      setDecryptedText(decryptedText);
    } catch (error) {
      console.error('OTP decryption error:', error);
    }
  };

  return (
    <div className="decrypt-container">
      <h2>Decryption</h2>
      <div>
        <label htmlFor="encryptedText">Enter encrypted text:</label>
        <textarea
          id="encryptedText"
          value={encryptedText}
          onChange={handleEncryptedTextChange}
          rows={5}
          cols={50}
        />
      </div>
      <div>
        <label htmlFor="decryptionKey">Enter the decryption key:</label>
        <input
          type="text"
          id="decryptionKey"
          value={decryptionKey}
          onChange={handleKeyChange}
        />
      </div>
      <button onClick={handleAesDecrypt}>AES Decrypt</button>
      <button onClick={handleOtpDecrypt}>OTP Decrypt</button>
      <div>
        <label htmlFor="decryptedText">Decrypted Text:</label>
        <textarea
          id="decryptedText"
          value={decryptedText}
          readOnly
          rows={5}
          cols={50}
        />
      </div>
    </div>
  );
};

export default Decrypt;
