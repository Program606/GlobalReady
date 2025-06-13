import React from 'react';
import '../css/AuthForm.css';

function AccountDetails({ companyName, email, onChange, onSave }) {
  return (
    <form className="auth-form" onSubmit={e => { e.preventDefault(); onSave(); }}>
      <h2 className="auth-form-title">Account Details</h2>
      <input
        className="auth-input"
        type="text"
        placeholder="Company Name"
        value={companyName}
        onChange={e => onChange('companyName', e.target.value)}
      />
      <input
        className="auth-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => onChange('email', e.target.value)}
      />
      <button className="auth-btn" type="submit">Save</button>
    </form>
  );
}

export default AccountDetails; 