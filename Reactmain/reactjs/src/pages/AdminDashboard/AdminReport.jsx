import React, { useState } from 'react';
import Adminsidebar from './components/Adminsidebar';

const AdminReport = () => {
  const reportedAccounts = [
    'account name 1',
    'account name 2',
    'account name 3',
    'account name 4',
    'account name 5',
  ];

  const [selectedAccount, setSelectedAccount] = useState(null);
  const [reason, setReason] = useState('');

  const handleAccountClick = (accountName, reportReason) => {
    setSelectedAccount(accountName);
    setReason(reportReason);
  };

  const handleCloseModal = () => {
    setSelectedAccount(null);
    setReason('');
  };

  return (
    <div
      style={{
        backgroundColor: '#A7BEAE',
        minHeight: '100vh',
        padding: '10px',
        backgroundAttachment: 'fixed',
        backgroundSize: '100%',
      }}
    >
      <Adminsidebar />
      <h1
        style={{
          color: '#333',
          fontSize: '2rem',
          marginBottom: '1rem',
          position: 'relative',
          left: '19%',
          animation: 'fadeIn 1s ease',
        }}
      >
        Reported Accounts
      </h1>
      {reportedAccounts.map((account) => (
        <div
          key={account}
          style={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #ccc',
            borderRadius: '21px',
            padding: '10px',
            backgroundColor: '#E7E8D1',
            marginBottom: '1rem',
            position: 'relative',
            width: '80%',
            left: '17%',
            animation: 'slideIn 0.5s ease',
          }}
        >
          <span
            style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginRight: '3rem',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            {account}
          </span>
          <div style={{ display: 'flex', gap: '11rem' }}>
            <button
              style={{
                backgroundColor: '#dc3545',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
              }}
              onClick={''}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              Delete
            </button>
            <button
              style={{
                backgroundColor: '#ffc107',
                color: '#333',
                border: 'none',
                borderRadius: '4px',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
              }}
              onClick={''}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              Suspend
            </button>
            <div style={{ position: 'relative' }}>
              <button
                style={{
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '0.5rem 1rem',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                }}
                onClick={() => handleAccountClick(account, 'Report inappropriate behavior')}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                Reason
              </button>
              {selectedAccount === account && (
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-250%',
                    transform: 'translateY(-50%)',
                    backgroundColor: '#FFF2D7',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    padding: '1rem',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    width: '200px',
                    animation: 'modalFadeIn 0.5s ease',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Reason:</p>
                    <button
                      style={{
                        backgroundColor: '#dc3545',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '0.2rem 0.5rem',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                      }}
                      onClick={handleCloseModal}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                      Close
                    </button>
                  </div>
                  <p>{reason}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }

        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default AdminReport;