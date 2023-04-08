import './trustPanel.scss';

function TrustPanel() {
  return (
    <section className='trust-panel'>
      <div className='trust-panel-statement'>
        <div className='icon-secure icon-xl'></div>
        <div className='trust-panel-text'>
          <p>Reliable & Safe</p>
          <span>working keys</span>
        </div>
      </div>

      <div className="spacer-line"></div>

      <div className='trust-panel-statement m-none'>
        <div className='icon-customer-support icon-xl'></div>
        <div className='trust-panel-text'>
          <p>Customer service</p>
          <span>24/7 support</span>
        </div>
      </div>

      <div className="spacer-line m-none"></div>

      <div className='trust-panel-statement'>
        <div className='icon-download icon-xl'></div>
        <div className='trust-panel-text'>
          <p>Express</p>
          <span>instant download</span>
        </div>
      </div>
    </section>
  );
}

export default TrustPanel;

