jsx
import React, { useState } from 'react';

export default function Portfolio() {
  const [expandedApp, setExpandedApp] = useState(null);

  const apps = [
    {
      id: 'mypepdoc',
      name: 'MyPepDoc',
      tagline: 'Your personal peptide tracking app with AI doctors',
      shortDesc: 'Choose Dr. Lexi or Dr. Rax as your guide. They know your peptide, your dose, your schedule, and your cycle day.',
      fullDesc: 'MyPepDoc is your personal peptide tracking app with an AI doctor who knows your protocol by name. Whether you\'re running BPC-157 for recovery, Semaglutide for weight management, CJC-1295/Ipamorelin for growth hormone support, or any other peptide, MyPepDoc keeps your entire protocol organized and gives you a knowledgeable companion every step of the way.',
      features: [
        'AI Doctor Chat - Protocol-aware answers about dosing, timing, side effects',
        'Smart Dose Calculator - Auto-calculates concentration and injection volume',
        'Blend Support - Handles multi-peptide combinations with anchor-based dosing',
        '40+ Peptide Database - Detailed research on every peptide',
        'Protocol Tracking - Track adherence, streaks, and weekly summaries',
        'Calendar View - Color-coded monthly schedule at a glance',
        'Flexible Scheduling - Adapt to any protocol structure',
        'Guided Setup - Conversational onboarding, not forms'
      ],
      screenshots: ['/MeetDoc.png', '/Setup.png', '/Track.png', '/Library.png', '/AskDoc.png', '/Calendar.png'],
      pricing: [
        { plan: 'Free', price: '$0', desc: '10 AI messages/month' },
        { plan: 'Monthly', price: '$6.99', desc: 'Unlimited features' },
        { plan: 'Annual', price: '$39.99', desc: 'Save 52% vs monthly' }
      ],
      appStoreLink: '#',
      googlePlayLink: '#',
      status: 'In Review'
    }
  ];

  return (
    <div style={{ background: 'var(--color-background-primary)', color: 'var(--color-text-primary)' }}>
      {/* Hero Section */}
      <section style={{
        paddingTop: '4rem',
        paddingBottom: '5rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        textAlign: 'center',
        borderBottom: `1px solid var(--color-border-tertiary)`
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 500,
          marginBottom: '0.5rem',
          letterSpacing: '-0.02em'
        }}>
          CodeByJ
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: 'var(--color-text-secondary)',
          marginBottom: '2rem',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Innovative health tech apps designed to empower your wellness journey
        </p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <a href="#apps" style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: 'var(--color-text-primary)',
            color: 'var(--color-background-primary)',
            borderRadius: 'var(--border-radius-lg)',
            textDecoration: 'none',
            fontWeight: 500,
            cursor: 'pointer',
            border: 'none'
          }}>
            Explore Apps
          </a>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" style={{
        padding: '4rem 1.5rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 500,
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          Featured Apps
        </h2>

        {apps.map((app) => (
          <div key={app.id} style={{
            border: `1px solid var(--color-border-tertiary)`,
            borderRadius: 'var(--border-radius-lg)',
            overflow: 'hidden',
            marginBottom: '2rem',
            transition: 'all 0.3s ease'
          }}>
            {/* App Header */}
            <div style={{
              padding: '2rem 1.5rem',
              background: 'var(--color-background-secondary)',
              borderBottom: `1px solid var(--color-border-tertiary)`
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{
                    fontSize: '1.75rem',
                    fontWeight: 500,
                    marginBottom: '0.25rem'
                  }}>
                    {app.name}
                  </h3>
                  <p style={{
                    color: 'var(--color-text-secondary)',
                    marginBottom: '1rem',
                    fontSize: '1.1rem'
                  }}>
                    {app.tagline}
                  </p>
                  <p style={{
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem'
                  }}>
                    {app.shortDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Screenshots */}
            <div style={{
              padding: '1.5rem',
              background: 'var(--color-background-tertiary)',
              overflowX: 'auto',
              borderBottom: `1px solid var(--color-border-tertiary)`
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '1rem'
              }}>
                {app.screenshots.map((screenshot, idx) => (
                  <div key={idx} style={{
                    background: 'var(--color-background-primary)',
                    borderRadius: 'var(--border-radius-lg)',
                    overflow: 'hidden',
                    border: `1px solid var(--color-border-tertiary)`,
                    height: '200px'
                  }}>
                    <img src={screenshot} alt={`${app.name} screenshot ${idx + 1}`} style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div style={{ padding: '2rem 1.5rem' }}>
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: 500,
                marginBottom: '1rem'
              }}>
                Key Features
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1rem'
              }}>
                {app.features.map((feature, idx) => (
                  <li key={idx} style={{
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'flex-start',
                    padding: '0.75rem',
                    background: 'var(--color-background-tertiary)',
                    borderRadius: 'var(--border-radius-md)'
                  }}>
                    <span style={{
                      fontSize: '1.2rem',
                      color: 'var(--color-text-secondary)',
                      marginTop: '2px',
                      flexShrink: 0
                    }}>
                      ✓
                    </span>
                    <span style={{ fontSize: '0.95rem' }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <div style={{
              padding: '2rem 1.5rem',
              borderTop: `1px solid var(--color-border-tertiary)`,
              background: 'var(--color-background-tertiary)'
            }}>
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: 500,
                marginBottom: '1rem'
              }}>
                Pricing
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem'
              }}>
                {app.pricing.map((tier, idx) => (
                  <div key={idx} style={{
                    padding: '1rem',
                    background: 'var(--color-background-primary)',
                    borderRadius: 'var(--border-radius-lg)',
                    border: `1px solid var(--color-border-tertiary)`,
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                      {tier.plan}
                    </div>
                    <div style={{
                      fontSize: '1.5rem',
                      fontWeight: 500,
                      marginBottom: '0.5rem',
                      color: 'var(--color-text-primary)'
                    }}>
                      {tier.price}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                      {tier.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{
              padding: '2rem 1.5rem',
              borderTop: `1px solid var(--color-border-tertiary)`,
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <span style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: 'var(--color-background-tertiary)',
                borderRadius: 'var(--border-radius-md)',
                fontSize: '0.9rem',
                color: 'var(--color-text-secondary)'
              }}>
                Status: {app.status}
              </span>
              <button style={{
                padding: '0.75rem 1.5rem',
                background: 'var(--color-text-primary)',
                color: 'var(--color-background-primary)',
                border: 'none',
                borderRadius: 'var(--border-radius-lg)',
                fontWeight: 500,
                cursor: 'pointer',
                fontSize: '1rem'
              }} onClick={() => alert('App Store link coming soon!')}>
                Download on App Store
              </button>
              <button style={{
                padding: '0.75rem 1.5rem',
                background: 'var(--color-text-primary)',
                color: 'var(--color-background-primary)',
                border: 'none',
                borderRadius: 'var(--border-radius-lg)',
                fontWeight: 500,
                cursor: 'pointer',
                fontSize: '1rem'
              }} onClick={() => alert('Google Play link coming soon!')}>
                Download on Google Play
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer style={{
        padding: '3rem 1.5rem',
        borderTop: `1px solid var(--color-border-tertiary)`,
        textAlign: 'center',
        background: 'var(--color-background-tertiary)'
      }}>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
          &copy; {new Date().getFullYear()} CodeByJ. All rights reserved.
        </p>
        <div style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          fontSize: '0.95rem'
        }}>
          <a href="#" style={{
            color: 'var(--color-text-secondary)',
            textDecoration: 'none'
          }}>
            Privacy Policy
          </a>
          <a href="#" style={{
            color: 'var(--color-text-secondary)',
            textDecoration: 'none'
          }}>
            Terms of Use
          </a>
          <a href="#" style={{
            color: 'var(--color-text-secondary)',
            textDecoration: 'none'
          }}>
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
