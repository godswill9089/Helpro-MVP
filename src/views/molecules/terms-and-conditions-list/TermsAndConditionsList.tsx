import React, { useState } from 'react';
import './TermsAndConditionsList.css';

const TermsAndConditionsList = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className='terms-and-conditions-list'>
      <div className='tab-btns'>
        <button
          onClick={() => setActiveTab(1)}
          className={`tab-btn ${activeTab === 1 && 'active'}`}
        >
          Customer Usage
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={`tab-btn ${activeTab === 2 && 'active'}`}
        >
          Service Providers
        </button>
      </div>
      <div className='lists'>
        <div className='titles'>
          <p className='intro'>Introduction</p>
          <ul>
            <li>1. General Conditions</li>
            <li>2. Eligibility</li>
            <li>3. Booking and scheduling</li>
          </ul>
        </div>
        {activeTab === 1 && (
          <div className='list'>
            <div className='group'>
              <h3 className='title-list'>Introduction</h3>
              <p className='info-list'>
                Welcome to Helproo. By accessing our website or using our
                services, you agree to comply with and be bound by the following
                terms and conditions. Please read them carefully. If you do not
                agree to these terms, please do not use our services.
              </p>
              <h3 className='title-list-2'>Definitions</h3>
              <ul>
                <li>
                  "Customer" or "You": Any person or entity that purchases
                  services from Helproo.
                </li>
                <li>
                  "Helproo" or "We": Helproo or any authorized contractor
                  approved by Helproo.
                </li>
                <li>
                  "Services": Any service offered by Helproo that the client
                  wishes to use.
                </li>
                <li>
                  "Cleaner" or "Cleaners": Any individual performing services on
                  behalf of Helproo.
                </li>
              </ul>
            </div>
            <div className='group'>
              <h3 className='title-list'>General conditions</h3>
              <ol>
                <li>
                  Acceptance of Terms: By accessing our website or using our
                  services, you agree to be bound by these terms and conditions,
                  which may be updated by us from time to time without notice.
                </li>
                <li>
                  Modifications: Helproo reserves the right to modify or
                  discontinue any part of the service with or without notice.
                </li>
                <li>
                  Eligibility: You must be at least 18 years of age to use our
                  services.
                </li>
                <li>
                  Account Security: You are responsible for maintaining the
                  confidentiality of your account and password and for
                  restricting access to your computer. You agree to accept
                  responsibility for all activities that occur under your
                  account or password.
                </li>
              </ol>
            </div>
            <div className='group'>
              <h3 className='title-list'>Eligibility</h3>
              <ul>
                <li>
                  General Use: This Platform is not intended for unsupervised
                  use by any person under the age of 18 years or any person who
                  has previously been suspended or prohibited from using the
                  Platform. By using the Platform, you represent and warrant
                  that you are either:
                  <ul>
                    <li>
                      (1) Over the age of 18 years and accessing the Platform
                      for personal use; or
                    </li>
                    <li>
                      (ii) Accessing the Platform on behalf of someone under the
                      age of 18 years with their consent and the consent of
                      their parent or guardian.
                    </li>
                  </ul>
                </li>
                <li>
                  Prohibition for Minors: Do not access the Platform if you are
                  under 18 and do not have parental or guardian consent, or if
                  you have been previously suspended or prohibited from using
                  the Platform.
                </li>
                <li>
                  Representing an Entity: If you use the Platform on behalf of a
                  company, organization, or other legal entity (Represented
                  Entity), you warrant that you have the necessary authority
                  from that entity to do so. If you are signing up not as an
                  individual but on behalf of your company, employer,
                  organization, government, or other legal entity, then "you" or
                  "User" refers to the Represented Entity and you are binding
                  the Represented Entity to this agreement. You represent and
                  warrant that you are authorized to accept this agreement and
                  use our Services on behalf of the Represented Entity.
                </li>
                <li>
                  Geo-Location: You must have geo-location capabilities turned
                  on for the device you will use to access the Platform, and you
                  must provide the Platform with the relevant permissions to
                  access your geo-location services on your device.
                </li>
              </ul>
            </div>
            <div className='group'>
              <h3 className='title-list'>Accounts</h3>
              <ul>
                <li>
                  Account Registration: In order to use most of the
                  functionality of the Platform, all Users are required to
                  sign-up, register, and receive an account through the Platform
                  (an Account).
                </li>
                <li>
                  Personal Information: As part of the Account registration
                  process and your continued use of the Platform, you are
                  required to provide personal information and details, such as
                  your email address, first and last name, preferred username, a
                  secure password, billing, postal and physical addresses,
                  mobile phone number, and other information as determined by
                  Helproo from time to time.
                </li>
                <li>
                  Accuracy of information: You warrant that any information you
                  provide to Helproo during the Account registration process
                  will always be accurate, honest, correct, and up to date.
                </li>
                <li>
                  Social Media Accounts: You may register for an Account using
                  your Google+, Facebook, or other social media network account
                  (Social Media Account). If you sign in to your Account using
                  your Social Media Account, you authorize us to access certain
                  information from your Social Media Account, including but not
                  limited to your current profile photo and other basic
                  information.
                </li>
                <li>
                  User Correspondence: Correspondence between Users must take
                  place on the Platform. You agree to ensure that your Account
                  does not display any of your personal contact information at
                  any time such that it can be viewed by any other User. You
                  agree not to give your contact details to any other User
                </li>
                <li>
                  Account Acceptance: Once you complete the Account registration
                  process, Helproo may, in its absolute discretion, choose to
                  accept you as a registered user within the Platform and
                  provide you with an Account.
                </li>
                <li>
                  Behavioral Concerns: Helproo reserves the right to contact you
                  regarding any concerning behavior by you, or to seek a
                  resolution with you.
                </li>
                <li>
                  Account Suspension or Cancellation: Helproo may, in its
                  absolute discretion, suspend or cancel your Account for any
                  reason, including for any failure to comply with this
                  agreement.
                </li>
              </ul>
            </div>
            <div className='group'>
              <h3 className='title-list'>Booking and scheduling</h3>
              <ol>
                <li>
                  Booking: All bookings must be made through our website, app,
                  or customer service line. Bookings are subject to
                  availability.
                </li>
                <li>
                  Confirmation: You will receive a confirmation email or message
                  once your booking is confirmed.
                </li>
                <li>
                  Service Hours: Services are typically available from 8 AM to 6
                  PM. Monday through Saturday. Exceptions can be made on a
                  case-by-case basis.
                </li>
              </ol>
            </div>
            <div className='group'>
              <h3 className='title-list'>Cancellations and Rescheduling</h3>
              <ol>
                <li>
                  Cancellations: Requests for cancellations must be made before
                  5 PM the day before the scheduled service. Cancellations made
                  after this time will incur a fee of $80.
                </li>
                <li>
                  Rescheduling: Requests to reschedule services must be made
                  before 5 PM the day before the appointment. Reschedule
                  requests made on the day of service may incur a late
                  reschedule fee of up to $80.
                </li>
                <li>
                  No-show or Denied Access: If our cleaners are denied access to
                  the property at the time of cleaning due to a customer no-show
                  or lock-out, you will be charged up to the full amount of the
                  booked service.
                </li>
              </ol>
            </div>
            <div className='group'>
              <h3 className='title-list'>Payment Terms</h3>
              <ol>
                <li>
                  Accepted Payment Methods: We accept all major credit cards.
                  Payments must be made before or immediately after the cleaning
                  service.
                </li>
                <li>
                  Late Payments: Late payments may incur a fee of $25.
                  Outstanding amounts beyond 15 days will incur a daily late fee
                  of $5.
                </li>
                <li>
                  Unpaid Invoices: Unpaid invoices referred to a collection
                  agency or legal firm will incur additional charges, including
                  legal fees and court costs.
                </li>
                <li>
                  Refunds: Refunds are only issued in the event of service
                  cancellation by Helproo or if we are unable to perform the
                  service as agreed.
                </li>
              </ol>
            </div>
            <div className='group'>
              <h3 className='title-list'>Pricing</h3>
              <ol>
                <li>
                  Flat Rate Pricing: Our pricing is based on the size of the
                  home. We reserve the right to adjust the price for homes
                  larger than average, with excessive pet hair, or unusually
                  messy conditions.
                </li>
                <li>
                  Quotes: All quotes are estimates based on average house and
                  room sizes. Quotes may be adjusted based on the actual
                  condition of the property.
                </li>
                <li>
                  Promotional Offers: Promotional offers are subject to specific
                  terms and conditions. They cannot be combined with other
                  offers unless explicitly stated.
                </li>
              </ol>
            </div>
            <div className='group'>
              <h3 className='title-list'>Service Guarantee</h3>
              <ol>
                <li>
                  Helproo Guarantee: We offer a guarantee on all our work,
                  including a free re-clean of missed spots. Claims for
                  re-cleans must be made within 24 hours of service.
                </li>
                <li>
                  Negative Reviews: We require 7 days to resolve any issues
                  before negative feedback is posted on public websites.
                </li>
              </ol>
            </div>
            <div className='group'>
              <h3 className='title-list'>Referrals</h3>
              <ol>
                <li>
                  Non-solicitation: Customers agree not to independently hire
                  any Helproo cleaners. A referral fee of $5000 is due
                  immediately upon personal employment of a cleaner.
                </li>
              </ol>
            </div>
            <div className='group'>
              <h3 className='title-list'>Safety and access</h3>
              <ol>
                <li>
                  Heavy Furniture: For safety reasons, our cleaners will not
                  move or lift heavy items. Please move large appliances or
                  furniture prior to our arrival.
                </li>
                <li>
                  Arrival Window: We reserve the right to arrive within a
                  30-minute window of the scheduled time.
                </li>
                <li>
                  Property Access: It is the customer's responsibility to ensure
                  the property is accessible. Failure to provide access may
                  result in additional charges.
                </li>
                <li>
                  Utilities: Customers must provide access to electricity and
                  running water.
                </li>
              </ol>
            </div>
            <div className='group'>
              <h3 className='title-list'>Conduct and behavior</h3>
              <ol>
                <li>
                  Inappropriate Behavior: We do not tolerate inappropriate
                  behavior towards our staff. This includes harassment,
                  intimidation, or threats. Services may be terminated
                  immediately without refund in such cases.
                </li>
                <li>
                  Pets: Customers must ensure pets are secured during the time
                  of service to prevent accidents or injuries.
                </li>
              </ol>
            </div>
            <div className='group'>
              <h3 className='title-list'>Liability</h3>
              <ol>
                <li>
                  Damage: We are not responsible for pre-existing damages or
                  items that are not properly secured. Customers must notify us
                  of fragile or valuable items.
                </li>
                <li>
                  Loss: We are not responsible for any loss of personal property
                  unless such loss is caused by our negligence.
                </li>
                <li>
                  Injury: We are not liable for any injury sustained by
                  customers or third parties while our staff is performing
                  services on your premises.
                </li>
              </ol>
            </div>
            <div className='group'>
              <h3 className='title-list'>Payment options</h3>
              <ol>
                <li>
                  Cash: We do not accept cash payments for any of our services.
                </li>
                <li>
                  Debit/Credit Card: Helproo uses Stripe to secure your card and
                  personal details. You can change, update, and remove your card
                  details online by contacting our customer support at [Customer
                  Support Number].
                </li>
                <li>
                  Over the Phone: We accept card details over the phone directly
                  through our customer support team. Payments are processed
                  using Stripe to ensure your card details are secure. Your
                  information is entered directly into your customer profile and
                  cannot be accessed once confirmed. You can update your payment
                  details upon request.
                </li>
                <li>
                  Bank Transfer: This payment option is only available for NDIS
                  planners and Age care clients upon request. Payments should be
                  made using a unique invoice number within 15 days from the
                  date of issue. If you did not receive an invoice, please
                  contact our accounts team at [Accounts Email] or call
                  [Customer Support Number]. Our bank details are available on
                  your invoice.
                </li>
              </ol>
            </div>
            <div className='group'>
              <h3 className='title-list'>
                End of Lease Clean & Bond-back Guarantee
              </h3>
              <ol>
                <li>
                  Service-Specific Guarantee: Our Bond-back guarantee only
                  applies to the specific service you have engaged us for. For
                  example, if you engage us for a Bond Clean but not a carpet
                  clean, our guarantee only covers the Bond Clean. Add-ons like
                  carpet cleaning are excluded unless explicitly included. Check
                  the complete list of exclusions [here].
                </li>
                <li>
                  Exclusions: The Bond-back guarantee does not include ceilings,
                  garage walls, exterior windows, or deep stains requiring a
                  professional third party. Other exclusions may apply as listed
                  in our full terms.
                </li>
                <li>
                  Re-clean Conditions: The free re-clean is only applicable upon
                  receipt of an inspection report from the managing
                  agent/landlord clearly listing the problems with the clean
                  along with images. The re-clean is valid within 72 hours from
                  the initial clean, provided the property was unoccupied and
                  empty during this period.
                </li>
                <li>
                  Booking Requirements: You must book your bond clean only after
                  all furniture is removed, the premises are not inhabited, and
                  all necessary maintenance or other work to the premises has
                  been completed.
                </li>
                <li>
                  Acts of God: We are not responsible for any incidents
                  classified as Acts of God, such as floods, storms, fires,
                  earthquakes, cyclones, etc.
                </li>
              </ol>
            </div>
            <div className='group'>
              <h3 className='title-list'>Claims</h3>
              <ol>
                <li>
                  Refunds: Refund claims will not be considered once the service
                  has been completed and we have vacated the property.
                </li>
                <li>
                  Re-clean or Inspection: Customers must agree to allow a
                  re-clean or inspection of any unsatisfactory work before
                  arranging a third party to conduct the service.
                </li>
                <li>
                  Guarantee Scope: The Bond-back guarantee applies only to End
                  of Lease Cleaning services.
                </li>
                <li>
                  Wear and Tear: All care is taken during the service. Some
                  older items may be subject to wear and tear and prone to
                  accidental breakage, such as light fittings, fly screens, and
                  other perishable plastics. If you believe damages beyond wear
                  and tear occurred due to the service, please provide photos
                  and a written report.
                </li>
                <li>
                  Incidental Costs: You agree to waive any right to claim
                  against us for any incidental costs incurred, including but
                  not limited to rent payable and loss of bond monies arising
                  from the service.
                </li>
                <li>
                  Damage Claims: Damage claims must include proof that the
                  damage was caused during the service. These claims are the
                  contractor's responsibility. If the fault is accepted, the
                  contractor and the customer must exchange details and agree to
                  allow the contractor access to the property for the duration
                  of the claim. This may include access for quoting replacement
                  and repair if applicable.
                </li>
                <li>
                  Fridge and Freezer Cleaning: If you require your fridge or
                  freezer to be cleaned, you are responsible for emptying and
                  defrosting it in advance. Additional costs may apply.
                </li>
                <li>
                  Incident Reporting: Customers must inform Helproo of any
                  incident involving accident, breakage, damage to property, or
                  theft caused by the cleaner within 24 hours from the
                  completion of the service.
                </li>
              </ol>
            </div>
            <div className='group'>
              <h3 className='title-list'>Ratings and Reviews </h3>
              <ul>
                <li>
                  Overview: Users have the ability to rate services (Rating)
                  and/or leave feedback about the services they received or
                  provided (Review).
                </li>
                <li>
                  Truthfulness: Reviews must be truthful, fair, and accurate.
                  Users should ensure their feedback reflects their genuine
                  experience.
                </li>
                <li>
                  Review Management: We reserve the right to remove any Review
                  that we deem to be false, unfair, inaccurate, offensive, or
                  inappropriate. We may also restrict the User from posting
                  future Reviews. However, we do not guarantee that all Reviews
                  will be monitored.
                </li>
                <li>
                  Disclaimer: To the fullest extent allowed by law, we are not
                  liable for the content of any Reviews.
                </li>
                <li>
                  Impartiality: Users should not post Reviews for Helproo
                  Service Providers with whom they have a personal or
                  professional connection outside the Platform.
                </li>
                <li>
                  Experience Verification: Reviews should only be posted if you
                  have had a direct experience with a Helproo Service Provider,
                  which includes:
                  <ul>
                    <li>
                      (i) Purchasing a product or service from the Helproo
                      Service Provider via the Platform; or
                    </li>
                    <li>
                      (ii) Placing an order with the Helproo Service Provider
                      through the Platform; or
                    </li>
                    <li>
                      (iii) Documenting your interaction with the Helproo
                      Service Provider, including communication or other
                      engagement via the Platform (referred to as a Service
                      Experience).
                    </li>
                  </ul>
                </li>
                <li>
                  Personal Feedback: Reviews should be based on your own
                  experience. It is not permissible to write a Review based on
                  someone else's experience, such as that of a family member.
                </li>
                <li>
                  Conflict of Interest: Users cannot write Reviews about a
                  Helproo Service Provider that they currently or previously
                  owned, or if a close family member currently owns it.
                  Employees or executives of the Service Provider, or those
                  working for competitors, are also prohibited from posting
                  Reviews.
                </li>
                <li>
                  Recency: Reviews should be based on experiences that occurred
                  within the past 12 months.
                </li>
                <li>
                  Honesty and Specificity: Reviews should be detailed and
                  honest. If a User has received an incentive to write a Review,
                  this should be disclosed. Incentives include gifts, rewards,
                  discounts, or any advantages offered for writing a Review.
                </li>
                <li>
                  Payment Collection: Payments on the Platform, including for
                  our Services, may be processed through a third-party payment
                  provider, currently Stripe (Online Payment Partner).
                </li>
                <li>
                  Public Visibility: Ratings and Reviews can be viewed by all
                  Users and will remain visible until the associated User’s
                  Account is deleted or terminated.
                </li>
              </ul>
            </div>
            <div className='group'>
              <h3 className='title-list'>Complaints and Claims</h3>
              <ol>
                <li>
                  Complaints: Must be made in writing within 24 hours of service
                  completion.
                </li>
                <li>
                  Claims: Customers must allow a re-clean or inspection before
                  arranging third-party services. Damages must be reported
                  within 24 hours.
                </li>
                <li>
                  Dispute Resolution: Any disputes will be handled in accordance
                  with our dispute resolution policy.
                </li>
                <li>
                  Bank Transfer: This payment option is only available for NDIS
                  planners and Age care clients upon request. Payments should be
                  made using a unique invoice number within 15 days from the
                  date of issue. If you did not receive an invoice, please
                  contact our accounts team at [Accounts Email] or call
                  [Customer Support Number]. Our bank details are available on
                  your invoice.
                </li>
              </ol>
            </div>
            <div className='group'>
              <h3 className='title-list'>Confidentiality</h3>
              <ol>
                <li>
                  Privacy Policy: We are committed to protecting your privacy.
                  Please refer to our Privacy Policy for details on how we
                  collect, use, and protect your information
                </li>
              </ol>
            </div>
            <div className='group'>
              <h3 className='title-list'>Governing law</h3>
              <p className='info-list'>
                These terms and conditions are governed by the laws of [Your
                State/Country]. Any disputes arising out of or related to these
                terms and conditions will be subject to the exclusive
                jurisdiction of the courts of [Your State/Country]
              </p>
            </div>
            <div className='group'>
              <h3 className='title-list'>Amendments</h3>
              <p className='info-list'>
                We may update these terms and conditions at any time. Changes
                will be posted on our website. Your continued use of our
                services constitutes acceptance of the revised terms.
              </p>
            </div>
            <div className='group'>
              <h3 className='title-list'>Contact information</h3>
              <br />
              <p className='info-list'>
                For any questions or concerns regarding these terms and
                conditions, please contact us at:
              </p>
              <ul>
                <li>Website: www.helproo.au</li>
                <li>
                  Location: Western Australia, Australia. Southern Sydney,
                  Australia.
                </li>
                <li>Phone Number: 0421425877</li>
                <li>Email Address: info@helproo.au</li>
              </ul>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className='list'>
            <div className='group'>
              <h3 className='title-list'>Eligibility</h3>
              <br />
              <p className='info-list'>
                To qualify as a Helproo Service Provider on our Platform, you
                must:
              </p>
              <ul>
                <li>Be at least 21 years old;</li>
                <li>Possess a valid Australian Business Number (ABN);</li>
                <li>
                  Own a vehicle and have a valid driver’s license, unless
                  otherwise permitted by Helproo in writing;
                </li>
                <li>
                  Have access to well-maintained, clean, and good-quality:
                  <ul>
                    <li>Washing machine</li>
                    <li>Dryer</li>
                    <li>Steam ironing station;</li>
                    <li>
                      Laundry space (collectively referred to as Equipment).
                    </li>
                  </ul>
                </li>
                <li>
                  You must confirm that any Customer is over 18 years old or has
                  parental or guardian consent to use the Platform.
                </li>
                <li>
                  Provide Helproo with details about your Equipment during
                  account registration and as requested from time to time.
                </li>
              </ul>
            </div>
            <div className='group'>
              <h3 className='title-list'>Qualifications and Clearances</h3>
              <br />
              <p className='info-list'>
                If you claim to have specific qualifications (Qualifications) in
                your Service Offers or on your Account, you guarantee to Helproo
                that you possess these Qualifications and will promptly provide
                evidence if requested.
              </p>
              <p className='info-list'>
                Additionally, you must, at your own expense, obtain and
                maintain:
              </p>
              <ul>
                <li>Valid proof of work rights in Australia;</li>
                <li>
                  A valid clear police clearance certificate in the jurisdiction
                  you are offering services in;
                </li>
                <li>
                  A valid working with children check in the jurisdiction you
                  are offering services in, if applicable.
                </li>
              </ul>
              <p className='info-list'>
                By using the Platform, you confirm that you have not been
                convicted of a criminal offence anywhere in the world and will
                notify Helproo immediately if this changes.
              </p>
              <p className='info-list'>
                You must provide evidence of relevant Qualifications and
                clearances promptly if requested by Helproo.
              </p>
            </div>
            <div className='group'>
              <h3 className='title-list'>
                Service Requests, Service Offers, and Pricing
              </h3>
              <br />
              <p className='info-list'>
                The Platform may use its algorithm to direct Service Requests
                from Customers to you, generally based on geographic location,
                though this is not guaranteed.
              </p>
              <p className='info-list'>Service Requests will specify:</p>
              <ul>
                <li>Load weight;</li>
                <li>
                  Special services (e.g., ironing, soaking, stain removal,
                  handwashing);
                </li>
                <li>Number of items for Special Services;</li>
                <li>Any other special requests.</li>
              </ul>
              <p className='info-list'>
                You can view the details of a Service Request and respond by
                accepting or rejecting it (each response being a Service Offer).
              </p>
              <p className='info-list'>
                The Platform will suggest a price for your Service Offer based
                on the Service Request Items (Recommended Price), which you can
                accept or adjust when sending your Service Offer (Quoted
                Amount).
              </p>
              <p className='info-list'>
                The Recommended Price is based on a 5-kilogram standard load
                (Standard Load) and any Special Services requested. You must not
                charge less than the Recommended Price for any Standard Load.
              </p>
              <p className='info-list'>
                When picking up the Service Request load from the Customer,
                check that the Service Request Items match those listed. If
                there is a discrepancy:
              </p>
              <ul>
                <li>
                  Increase the Quoted Amount by up to 15% for minor variances
                  and proceed with the service;
                </li>
                <li>
                  For larger discrepancies, inform the Customer of the adjusted
                  Quoted Amount:
                  <ul>
                    <li>If the Customer accepts, proceed with the service;</li>
                    <li>
                      If the Customer rejects, perform services up to the
                      original Quoted Amount.
                    </li>
                  </ul>
                </li>
              </ul>
              <p className='info-list'>
                Once a Customer accepts your Service Offer, a contract is formed
                between you and the Customer at the agreed price.
              </p>
              <br />
              <p className='info-list'>You agree that:</p>
              <ul>
                <li>
                  All information in a Service Offer must be true, timely, and
                  accurate;
                </li>
                <li>
                  You must complete all agreed services in every accepted
                  Service Offer;
                </li>
                <li>
                  Disputes with Customers should be handled per the Platform’s
                  procedures;
                </li>
                <li>
                  Any additional terms between you and the Customer must not
                  conflict with the obligations under this agreement;
                </li>
                <li>
                  Helproo is not responsible for the accuracy, reliability, or
                  timeliness of any Service Request or Customer’s response.
                </li>
              </ul>
            </div>
            <div className='group'>
              <h3 className='title-list'>Provision of Services</h3>
              <br />
              <p className='info-list'>
                You must provide all services specified in an accepted Service
                Offer
              </p>
              <ul>
                <li>
                  In compliance with applicable laws, regulations, tax
                  obligations, and industry standards;
                </li>
                <li>With due care, skill, and professionalism;</li>
                <li>Using only clean and sanitized Equipment;</li>
                <li>
                  Using high-quality laundry products from well-known brands;
                </li>
                <li>Ensuring services are fit for their intended purpose;</li>
                <li>On the agreed date and times.</li>
              </ul>
              <p className='info-list'>
                Customers may review your services on the Platform as per the
                terms.
              </p>
              <p className='info-list'>
                If a Customer requests to reschedule, you can choose to accept
                or reject the request.
              </p>
              <br />
              <p className='info-list'>Fees and Pricing</p>
            </div>
            <div className='group'>
              <h3 className='title-list'>Fees</h3>
              <br />
              <p className='info-list'>
                We charge a percentage of the Quoted Amount as a Service Fee,
                which varies based on the value of the Quoted Amount and
                Customer subscription status. The Service Fee will not be less
                than 20% of the Recommended Price.
              </p>

              <p className='info-list'>
                After a Customer accepts a Service Offer and you verify the
                Service Request items, the Customer will be charged the Quoted
                Amount by our Online Payment Partner.
              </p>
              <p className='info-list'>
                The balance, minus the Service Fee (Your Fee), will be held in
                your Online Payment Partner account and transferred to your
                nominated bank account per the Online Payment Partner’s terms.
              </p>
              <br />
              <p className='info-list'>
                You appoint the Online Payment Partner as your collection agent
                for accepting Your Fee from the Customer. Payments made to the
                Online Payment Partner are considered the same as payments made
                directly to you.
              </p>
              <p className='info-list'>
                Helproo may change or waive the Service Fee by updating this
                agreement with 14 days’ written notice. Continued use of the
                Services after receiving such notice constitutes consent to the
                changes.
              </p>
              <p className='info-list'>
                Unless required by law, taxes (including GST) will be calculated
                on the Quoted Amount, and the Service Fee will be calculated on
                the Quoted Amount plus applicable taxes. Refunds and
                Cancellations
              </p>
              <p className='info-list'>
                If you wish to cancel a service before completion, you must
                contact the Customer via the Platform, providing reasons for
                cancellation. If Helproo investigates, you must assist as
                requested.
              </p>
              <p className='info-list'>
                Your cancellation and refund policies must comply with
                applicable laws.
              </p>
              <p className='info-list'>
                The Service Fee is non-refundable for change of mind, but
                Helproo may issue refunds at its discretion.
              </p>
              <p className='info-list'>
                You agree to comply with this clause in the event of a pricing
                error in a Service Offer.
              </p>
            </div>
            <div className='group'>
              <h3 className='title-list'>Bypassing</h3>
              <br />
              <p className='info-list'>
                While using the Platform and for one year after ceasing usage,
                you must not solicit or attempt to solicit business from any
                Customer you encountered through the Platform. Helproo may
                cancel your Account for breaches of this clause.
              </p>
            </div>
            <div className='group'>
              <h3 className='title-list'>Binding Contract</h3>
              <br />
              <p className='info-list'>
                Submitting a Service Offer in response to a Service Request
                constitutes an offer to enter into a contract with the Customer
                for the specified services. A contract is formed when the
                Customer accepts your Service Offer.
              </p>
            </div>
            <div className='group'>
              <h3 className='title-list'>Warranties</h3>
              <br />
              <ul>
                <li>
                  By listing as a Helproo Service Provider and responding to
                  Service Requests, you represent and warrant that:
                  <ul>
                    <li>You can fulfill the service requirements;</li>
                    <li>
                      Services will be provided using qualified personnel with
                      due care and skill, using clean and well-maintained
                      Equipment, and in compliance with laws;
                    </li>
                    <li>
                      Individuals involved in service provision have no
                      indictable offence convictions, and companies have no
                      current legal issues.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className='group'>
              <h3 className='title-list'>Helproo Garment Protection Plan</h3>
              <br />
              <p className='info-list'>
                Our processes minimize the risk of item loss or damage. However,
                our Garment Protection Plan covers up to $50 per item and up to
                $250 per order. Additional cover is available with our Premium
                Plan for $5 per order, covering up to $100 per item and $500 per
                order.
              </p>
              <br />
              <p className='info-list'>
                The Plan covers 70% of the retail purchase price and only claims
                made within 24 hours of delivery, payable in Helproo customer
                credits.
              </p>
              <br />
              <p className='info-list'>
                Shrinkage, holes, tears, and colour bleeds due to standard
                laundering are not covered.
              </p>
              <br />
              <p className='info-list'>
                Credit under the Garment Protection Plan is not guaranteed and
                is at Helproo’s discretion.
              </p>
              <br />
              <p className='info-list'>
                Our customer support team is available for assistance.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TermsAndConditionsList;
