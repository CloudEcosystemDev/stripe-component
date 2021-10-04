# <p align="center" width="100%"> <img src="./logo.png" width="250" height="250"> </p> 
# <p align="center" width="100%"> Stripe API OIH Connector </p>

## Description

A generated OIH connector for the Stripe API API (version 2020-08-27).

Generated from: https://raw.githubusercontent.com/stripe/openapi/master/openapi/spec3.json<br/>
Generated at: 2021-10-04T13:24:09+02:00

## API Description

The Stripe REST API. Please see https://stripe.com/docs/api for more details.<br/>

## Authorization

Supported authorization schemes:
- Basic Authentication - Basic HTTP authentication. Allowed headers-- Authorization: Basic <api_key> | Authorization: Basic <base64 hash of `api_key:`>
- Bearer Token - Bearer HTTP authentication. Allowed headers-- Authorization: Bearer <api_key>

## Actions

### Post3dSecure
<blockquote><p>Initiate 3D Secure authentication.</p></blockquote>

### Get3dSecureThreeDSecure
<blockquote><p>Retrieves a 3D Secure object.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `three_d_secure` - _required_

### DeleteAccount
<blockquote><p>With <a href="/docs/connect">Connect</a>, you can delete accounts you manage.</p>

<p>Accounts created using test-mode keys can be deleted at any time. Custom or Express accounts created using live-mode keys can only be deleted once all balances are zero.</p>

<p>If you want to delete your own account, use the <a href="https://dashboard.stripe.com/account">account information tab in your account settings</a> instead.</p></blockquote>

### PostAccount
<blockquote><p>Updates a <a href="/docs/connect/accounts">connected account</a> by setting the values of the parameters passed. Any parameters not provided are left unchanged. Most parameters can be changed only for Custom accounts. (These are marked <strong>Custom Only</strong> below.) Parameters marked <strong>Custom and Express</strong> are not supported for Standard accounts.</p>

<p>To update your own account, use the <a href="https://dashboard.stripe.com/account">Dashboard</a>. Refer to our <a href="/docs/connect/updating-accounts">Connect</a> documentation to learn more about updating accounts.</p></blockquote>

### PostAccountBankAccounts
<blockquote><p>Create an external account for a given account.</p></blockquote>

### DeleteAccountBankAccountsId
<blockquote><p>Delete a specified external account for a given account.</p></blockquote>

#### Input Parameters
* `id` - _required_

### GetAccountBankAccountsId
<blockquote><p>Retrieve a specified external account for a given account.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_

### PostAccountBankAccountsId
<blockquote><p>Updates the metadata, account holder name, account holder type of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p>

<p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p></blockquote>

#### Input Parameters
* `id` - _required_

### GetAccountCapabilitiesCapability
<blockquote><p>Retrieves information about the specified Account Capability.</p></blockquote>

#### Input Parameters
* `capability` - _required_
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>

### PostAccountCapabilitiesCapability
<blockquote><p>Updates an existing Account Capability.</p></blockquote>

#### Input Parameters
* `capability` - _required_

### PostAccountExternalAccounts
<blockquote><p>Create an external account for a given account.</p></blockquote>

### DeleteAccountExternalAccountsId
<blockquote><p>Delete a specified external account for a given account.</p></blockquote>

#### Input Parameters
* `id` - _required_

### GetAccountExternalAccountsId
<blockquote><p>Retrieve a specified external account for a given account.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_

### PostAccountExternalAccountsId
<blockquote><p>Updates the metadata, account holder name, account holder type of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p>

<p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p></blockquote>

#### Input Parameters
* `id` - _required_

### PostAccountLoginLinks
<blockquote><p>Creates a single-use login link for an Express account to access their Stripe dashboard.</p>

<p><strong>You may only create login links for <a href="/docs/connect/express-accounts">Express accounts</a> connected to your platform</strong>.</p></blockquote>

### PostAccountPeople
<blockquote><p>Creates a new person.</p></blockquote>

### DeleteAccountPeoplePerson
<blockquote><p>Deletes an existing person's relationship to the account's legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the <code>account_opener</code>. If your integration is using the <code>executive</code> parameter, you cannot delete the only verified <code>executive</code> on file.</p></blockquote>

#### Input Parameters
* `person` - _required_

### GetAccountPeoplePerson
<blockquote><p>Retrieves an existing person.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `person` - _required_

### PostAccountPeoplePerson
<blockquote><p>Updates an existing person.</p></blockquote>

#### Input Parameters
* `person` - _required_

### PostAccountPersons
<blockquote><p>Creates a new person.</p></blockquote>

### DeleteAccountPersonsPerson
<blockquote><p>Deletes an existing person's relationship to the account's legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the <code>account_opener</code>. If your integration is using the <code>executive</code> parameter, you cannot delete the only verified <code>executive</code> on file.</p></blockquote>

#### Input Parameters
* `person` - _required_

### GetAccountPersonsPerson
<blockquote><p>Retrieves an existing person.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `person` - _required_

### PostAccountPersonsPerson
<blockquote><p>Updates an existing person.</p></blockquote>

#### Input Parameters
* `person` - _required_

### PostAccountLinks
<blockquote><p>Creates an AccountLink object that includes a single-use Stripe URL that the platform can redirect their user to in order to take them through the Connect Onboarding flow.</p></blockquote>

### PostAccounts
<blockquote><p>With <a href="/docs/connect">Connect</a>, you can create Stripe accounts for your users.
To do this, you'll first need to <a href="https://dashboard.stripe.com/account/applications/settings">register your platform</a>.</p></blockquote>

### DeleteAccountsAccount
<blockquote><p>With <a href="/docs/connect">Connect</a>, you can delete accounts you manage.</p>

<p>Accounts created using test-mode keys can be deleted at any time. Custom or Express accounts created using live-mode keys can only be deleted once all balances are zero.</p>

<p>If you want to delete your own account, use the <a href="https://dashboard.stripe.com/account">account information tab in your account settings</a> instead.</p></blockquote>

#### Input Parameters
* `account` - _required_

### GetAccountsAccount
<blockquote><p>Retrieves the details of an account.</p></blockquote>

#### Input Parameters
* `account` - _required_
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>

### PostAccountsAccount
<blockquote><p>Updates a <a href="/docs/connect/accounts">connected account</a> by setting the values of the parameters passed. Any parameters not provided are left unchanged. Most parameters can be changed only for Custom accounts. (These are marked <strong>Custom Only</strong> below.) Parameters marked <strong>Custom and Express</strong> are not supported for Standard accounts.</p>

<p>To update your own account, use the <a href="https://dashboard.stripe.com/account">Dashboard</a>. Refer to our <a href="/docs/connect/updating-accounts">Connect</a> documentation to learn more about updating accounts.</p></blockquote>

#### Input Parameters
* `account` - _required_

### PostAccountsAccountBankAccounts
<blockquote><p>Create an external account for a given account.</p></blockquote>

#### Input Parameters
* `account` - _required_

### DeleteAccountsAccountBankAccountsId
<blockquote><p>Delete a specified external account for a given account.</p></blockquote>

#### Input Parameters
* `account` - _required_
* `id` - _required_

### GetAccountsAccountBankAccountsId
<blockquote><p>Retrieve a specified external account for a given account.</p></blockquote>

#### Input Parameters
* `account` - _required_
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_

### PostAccountsAccountBankAccountsId
<blockquote><p>Updates the metadata, account holder name, account holder type of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p>

<p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p></blockquote>

#### Input Parameters
* `account` - _required_
* `id` - _required_

### GetAccountsAccountCapabilitiesCapability
<blockquote><p>Retrieves information about the specified Account Capability.</p></blockquote>

#### Input Parameters
* `account` - _required_
* `capability` - _required_
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>

### PostAccountsAccountCapabilitiesCapability
<blockquote><p>Updates an existing Account Capability.</p></blockquote>

#### Input Parameters
* `account` - _required_
* `capability` - _required_

### PostAccountsAccountExternalAccounts
<blockquote><p>Create an external account for a given account.</p></blockquote>

#### Input Parameters
* `account` - _required_

### DeleteAccountsAccountExternalAccountsId
<blockquote><p>Delete a specified external account for a given account.</p></blockquote>

#### Input Parameters
* `account` - _required_
* `id` - _required_

### GetAccountsAccountExternalAccountsId
<blockquote><p>Retrieve a specified external account for a given account.</p></blockquote>

#### Input Parameters
* `account` - _required_
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_

### PostAccountsAccountExternalAccountsId
<blockquote><p>Updates the metadata, account holder name, account holder type of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p>

<p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p></blockquote>

#### Input Parameters
* `account` - _required_
* `id` - _required_

### PostAccountsAccountLoginLinks
<blockquote><p>Creates a single-use login link for an Express account to access their Stripe dashboard.</p>

<p><strong>You may only create login links for <a href="/docs/connect/express-accounts">Express accounts</a> connected to your platform</strong>.</p></blockquote>

#### Input Parameters
* `account` - _required_

### PostAccountsAccountPeople
<blockquote><p>Creates a new person.</p></blockquote>

#### Input Parameters
* `account` - _required_

### DeleteAccountsAccountPeoplePerson
<blockquote><p>Deletes an existing person's relationship to the account's legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the <code>account_opener</code>. If your integration is using the <code>executive</code> parameter, you cannot delete the only verified <code>executive</code> on file.</p></blockquote>

#### Input Parameters
* `account` - _required_
* `person` - _required_

### GetAccountsAccountPeoplePerson
<blockquote><p>Retrieves an existing person.</p></blockquote>

#### Input Parameters
* `account` - _required_
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `person` - _required_

### PostAccountsAccountPeoplePerson
<blockquote><p>Updates an existing person.</p></blockquote>

#### Input Parameters
* `account` - _required_
* `person` - _required_

### PostAccountsAccountPersons
<blockquote><p>Creates a new person.</p></blockquote>

#### Input Parameters
* `account` - _required_

### DeleteAccountsAccountPersonsPerson
<blockquote><p>Deletes an existing person's relationship to the account's legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the <code>account_opener</code>. If your integration is using the <code>executive</code> parameter, you cannot delete the only verified <code>executive</code> on file.</p></blockquote>

#### Input Parameters
* `account` - _required_
* `person` - _required_

### GetAccountsAccountPersonsPerson
<blockquote><p>Retrieves an existing person.</p></blockquote>

#### Input Parameters
* `account` - _required_
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `person` - _required_

### PostAccountsAccountPersonsPerson
<blockquote><p>Updates an existing person.</p></blockquote>

#### Input Parameters
* `account` - _required_
* `person` - _required_

### PostAccountsAccountReject
<blockquote><p>With <a href="/docs/connect">Connect</a>, you may flag accounts as suspicious.</p>

<p>Test-mode Custom and Express accounts can be rejected at any time. Accounts created using live-mode keys may only be rejected once all balances are zero.</p></blockquote>

#### Input Parameters
* `account` - _required_

### PostApplePayDomains
<blockquote><p>Create an apple pay domain.</p></blockquote>

### DeleteApplePayDomainsDomain
<blockquote><p>Delete an apple pay domain.</p></blockquote>

#### Input Parameters
* `domain` - _required_

### GetApplePayDomainsDomain
<blockquote><p>Retrieve an apple pay domain.</p></blockquote>

#### Input Parameters
* `domain` - _required_
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>

### GetApplicationFeesFeeRefundsId
<blockquote><p>By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details about a specific refund stored on the application fee.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `fee` - _required_
* `id` - _required_

### PostApplicationFeesFeeRefundsId
<blockquote><p>Updates the specified application fee refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>This request only accepts metadata as an argument.</p></blockquote>

#### Input Parameters
* `fee` - _required_
* `id` - _required_

### GetApplicationFeesId
<blockquote><p>Retrieves the details of an application fee that your account has collected. The same information is returned when refunding the application fee.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_

### PostApplicationFeesIdRefund

#### Input Parameters
* `id` - _required_

### PostApplicationFeesIdRefunds
<blockquote><p>Refunds an application fee that has previously been collected but not yet refunded.
Funds will be refunded to the Stripe account from which the fee was originally collected.</p>

<p>You can optionally refund only part of an application fee.
You can do so multiple times, until the entire fee has been refunded.</p>

<p>Once entirely refunded, an application fee can't be refunded again.
This method will raise an error when called on an already-refunded application fee,
or when trying to refund more money than is left on an application fee.</p></blockquote>

#### Input Parameters
* `id` - _required_

### GetBalanceHistoryId
<blockquote><p>Retrieves the balance transaction with the given ID.</p>

<p>Note that this endpoint previously used the path <code>/v1/balance/history/:id</code>.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_

### GetBalanceTransactionsId
<blockquote><p>Retrieves the balance transaction with the given ID.</p>

<p>Note that this endpoint previously used the path <code>/v1/balance/history/:id</code>.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_

### PostBillingPortalConfigurations
<blockquote><p>Creates a configuration that describes the functionality and behavior of a PortalSession</p></blockquote>

### GetBillingPortalConfigurationsConfiguration
<blockquote><p>Retrieves a configuration that describes the functionality of the customer portal.</p></blockquote>

#### Input Parameters
* `configuration` - _required_
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>

### PostBillingPortalConfigurationsConfiguration
<blockquote><p>Updates a configuration that describes the functionality of the customer portal.</p></blockquote>

#### Input Parameters
* `configuration` - _required_

### PostBillingPortalSessions
<blockquote><p>Creates a session of the customer portal.</p></blockquote>

### GetBitcoinReceiversId
<blockquote><p>Retrieves the Bitcoin receiver with the given ID.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_

### PostCharges
<blockquote><p>To charge a credit card or other payment source, you create a <code>Charge</code> object. If your API key is in test mode, the supplied payment source (e.g., card) won't actually be charged, although everything else will occur as if in live mode. (Stripe assumes that the charge would have completed successfully).</p></blockquote>

### GetChargesCharge
<blockquote><p>Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and Stripe will return the corresponding charge information. The same information is returned when creating or refunding the charge.</p></blockquote>

#### Input Parameters
* `charge` - _required_
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>

### PostChargesCharge
<blockquote><p>Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p></blockquote>

#### Input Parameters
* `charge` - _required_

### PostChargesChargeCapture
<blockquote><p>Capture the payment of an existing, uncaptured, charge. This is the second half of the two-step payment flow, where first you <a href="#create_charge">created a charge</a> with the capture option set to false.</p>

<p>Uncaptured payments expire exactly seven days after they are created. If they are not captured by that point in time, they will be marked as refunded and will no longer be capturable.</p></blockquote>

#### Input Parameters
* `charge` - _required_

### PostChargesChargeDispute

#### Input Parameters
* `charge` - _required_

### PostChargesChargeDisputeClose

#### Input Parameters
* `charge` - _required_

### PostChargesChargeRefund
<blockquote><p>When you create a new refund, you must specify a Charge or a PaymentIntent object on which to create it.</p>

<p>Creating a new refund will refund a charge that has previously been created but not yet refunded.
Funds will be refunded to the credit or debit card that was originally charged.</p>

<p>You can optionally refund only part of a charge.
You can do so multiple times, until the entire charge has been refunded.</p>

<p>Once entirely refunded, a charge can't be refunded again.
This method will raise an error when called on an already-refunded charge,
or when trying to refund more money than is left on a charge.</p></blockquote>

#### Input Parameters
* `charge` - _required_

### PostChargesChargeRefunds
<blockquote><p>Create a refund.</p></blockquote>

#### Input Parameters
* `charge` - _required_

### GetChargesChargeRefundsRefund
<blockquote><p>Retrieves the details of an existing refund.</p></blockquote>

#### Input Parameters
* `charge` - _required_
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `refund` - _required_

### PostChargesChargeRefundsRefund
<blockquote><p>Update a specified refund.</p></blockquote>

#### Input Parameters
* `charge` - _required_
* `refund` - _required_

### PostCheckoutSessions
<blockquote><p>Creates a Session object.</p></blockquote>

### GetCheckoutSessionsSession
<blockquote><p>Retrieves a Session object.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `session` - _required_

### GetCountrySpecsCountry
<blockquote><p>Returns a Country Spec for a given Country code.</p></blockquote>

#### Input Parameters
* `country` - _required_
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>

### PostCoupons
<blockquote><p>You can create coupons easily via the <a href="https://dashboard.stripe.com/coupons">coupon management</a> page of the Stripe dashboard. Coupon creation is also accessible via the API if you need to create coupons on the fly.</p>

<p>A coupon has either a <code>percent_off</code> or an <code>amount_off</code> and <code>currency</code>. If you set an <code>amount_off</code>, that amount will be subtracted from any invoice's subtotal. For example, an invoice with a subtotal of <currency>100</currency> will have a final total of <currency>0</currency> if a coupon with an <code>amount_off</code> of <amount>200</amount> is applied to it and an invoice with a subtotal of <currency>300</currency> will have a final total of <currency>100</currency> if a coupon with an <code>amount_off</code> of <amount>200</amount> is applied to it.</p></blockquote>

### DeleteCouponsCoupon
<blockquote><p>You can delete coupons via the <a href="https://dashboard.stripe.com/coupons">coupon management</a> page of the Stripe dashboard. However, deleting a coupon does not affect any customers who have already applied the coupon; it means that new customers can't redeem the coupon. You can also delete coupons via the API.</p></blockquote>

#### Input Parameters
* `coupon` - _required_

### GetCouponsCoupon
<blockquote><p>Retrieves the coupon with the given ID.</p></blockquote>

#### Input Parameters
* `coupon` - _required_
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>

### PostCouponsCoupon
<blockquote><p>Updates the metadata of a coupon. Other coupon details (currency, duration, amount_off) are, by design, not editable.</p></blockquote>

#### Input Parameters
* `coupon` - _required_

### PostCreditNotes
<blockquote><p>Issue a credit note to adjust the amount of a finalized invoice. For a <code>status=open</code> invoice, a credit note reduces
its <code>amount_due</code>. For a <code>status=paid</code> invoice, a credit note does not affect its <code>amount_due</code>. Instead, it can result
in any combination of the following:</p>

<ul>
<li>Refund: create a new refund (using <code>refund_amount</code>) or link an existing refund (using <code>refund</code>).</li>
<li>Customer balance credit: credit the customer's balance (using <code>credit_amount</code>) which will be automatically applied to their next invoice when it's finalized.</li>
<li>Outside of Stripe credit: record the amount that is or will be credited outside of Stripe (using <code>out_of_band_amount</code>).</li>
</ul>

<p>For post-payment credit notes the sum of the refund, credit and outside of Stripe amounts must equal the credit note total.</p>

<p>You may issue multiple credit notes for an invoice. Each credit note will increment the invoice's <code>pre_payment_credit_notes_amount</code>
or <code>post_payment_credit_notes_amount</code> depending on its <code>status</code> at the time of credit note creation.</p></blockquote>

### GetCreditNotesId
<blockquote><p>Retrieves the credit note object with the given identifier.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_

### PostCreditNotesId
<blockquote><p>Updates an existing credit note.</p></blockquote>

#### Input Parameters
* `id` - _required_

### PostCreditNotesIdVoid
<blockquote><p>Marks a credit note as void. Learn more about <a href="/docs/billing/invoices/credit-notes#voiding">voiding credit notes</a>.</p></blockquote>

#### Input Parameters
* `id` - _required_

### PostCustomers
<blockquote><p>Creates a new customer object.</p></blockquote>

### DeleteCustomersCustomer
<blockquote><p>Permanently deletes a customer. It cannot be undone. Also immediately cancels any active subscriptions on the customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_

### GetCustomersCustomer
<blockquote><p>Retrieves the details of an existing customer. You need only supply the unique customer identifier that was returned upon customer creation.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>

### PostCustomersCustomer
<blockquote><p>Updates the specified customer by setting the values of the parameters passed. Any parameters not provided will be left unchanged. For example, if you pass the <strong>source</strong> parameter, that becomes the customer's active source (e.g., a card) to be used for all charges in the future. When you update a customer to a new valid card source by passing the <strong>source</strong> parameter: for each of the customer's current subscriptions, if the subscription bills automatically and is in the <code>past_due</code> state, then the latest open invoice for the subscription with automatic collection enabled will be retried. This retry will not count as an automatic retry, and will not affect the next regularly scheduled payment for the invoice. Changing the <strong>default_source</strong> for a customer will not trigger this behavior.</p>

<p>This request accepts mostly the same arguments as the customer creation call.</p></blockquote>

#### Input Parameters
* `customer` - _required_

### PostCustomersCustomerBalanceTransactions
<blockquote><p>Creates an immutable transaction that updates the customer's credit <a href="/docs/billing/customer/balance">balance</a>.</p></blockquote>

#### Input Parameters
* `customer` - _required_

### GetCustomersCustomerBalanceTransactionsTransaction
<blockquote><p>Retrieves a specific customer balance transaction that updated the customer's <a href="/docs/billing/customer/balance">balances</a>.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `transaction` - _required_

### PostCustomersCustomerBalanceTransactionsTransaction
<blockquote><p>Most credit balance transaction fields are immutable, but you may update its <code>description</code> and <code>metadata</code>.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `transaction` - _required_

### PostCustomersCustomerBankAccounts
<blockquote><p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p>

<p>If the card's owner has no default card, then the new card will become the default.
However, if the owner already has a default, then it will not change.
To change the default, you should <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>.</p></blockquote>

#### Input Parameters
* `customer` - _required_

### DeleteCustomersCustomerBankAccountsId
<blockquote><p>Delete a specified source for a given customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `id` - _required_

### GetCustomersCustomerBankAccountsId
<blockquote><p>By default, you can see the 10 most recent sources stored on a Customer directly on the object, but you can also retrieve details about a specific bank account stored on the Stripe account.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_

### PostCustomersCustomerBankAccountsId
<blockquote><p>Update a specified source for a given customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `id` - _required_

### PostCustomersCustomerBankAccountsIdVerify
<blockquote><p>Verify a specified bank account for a given customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `id` - _required_

### PostCustomersCustomerCards
<blockquote><p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p>

<p>If the card's owner has no default card, then the new card will become the default.
However, if the owner already has a default, then it will not change.
To change the default, you should <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>.</p></blockquote>

#### Input Parameters
* `customer` - _required_

### DeleteCustomersCustomerCardsId
<blockquote><p>Delete a specified source for a given customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `id` - _required_

### GetCustomersCustomerCardsId
<blockquote><p>You can always see the 10 most recent cards directly on a customer; this method lets you retrieve details about a specific card stored on the customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_

### PostCustomersCustomerCardsId
<blockquote><p>Update a specified source for a given customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `id` - _required_

### DeleteCustomersCustomerDiscount
<blockquote><p>Removes the currently applied discount on a customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_

### PostCustomersCustomerSources
<blockquote><p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p>

<p>If the card's owner has no default card, then the new card will become the default.
However, if the owner already has a default, then it will not change.
To change the default, you should <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>.</p></blockquote>

#### Input Parameters
* `customer` - _required_

### DeleteCustomersCustomerSourcesId
<blockquote><p>Delete a specified source for a given customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `id` - _required_

### GetCustomersCustomerSourcesId
<blockquote><p>Retrieve a specified source for a given customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_

### PostCustomersCustomerSourcesId
<blockquote><p>Update a specified source for a given customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `id` - _required_

### PostCustomersCustomerSourcesIdVerify
<blockquote><p>Verify a specified bank account for a given customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `id` - _required_

### PostCustomersCustomerSubscriptions
<blockquote><p>Creates a new subscription on an existing customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_

### DeleteCustomersCustomerSubscriptionsSubscriptionExposedId
<blockquote><p>Cancels a customer's subscription. If you set the <code>at_period_end</code> parameter to <code>true</code>, the subscription will remain active until the end of the period, at which point it will be canceled and not renewed. Otherwise, with the default <code>false</code> value, the subscription is terminated immediately. In either case, the customer will not be charged again for the subscription.</p>

<p>Note, however, that any pending invoice items that you've created will still be charged for at the end of the period, unless manually <a href="#delete_invoiceitem">deleted</a>. If you've set the subscription to cancel at the end of the period, any pending prorations will also be left in place and collected at the end of the period. But if the subscription is set to cancel immediately, pending prorations will be removed.</p>

<p>By default, upon subscription cancellation, Stripe will stop automatic collection of all finalized invoices for the customer. This is intended to prevent unexpected payment attempts after the customer has canceled a subscription. However, you can resume automatic collection of the invoices manually after subscription cancellation to have us proceed. Or, you could check for unpaid invoices before allowing the customer to cancel the subscription at all.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `subscription_exposed_id` - _required_

### GetCustomersCustomerSubscriptionsSubscriptionExposedId
<blockquote><p>Retrieves the subscription with the given ID.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `subscription_exposed_id` - _required_

### PostCustomersCustomerSubscriptionsSubscriptionExposedId
<blockquote><p>Updates an existing subscription on a customer to match the specified parameters. When changing plans or quantities, we will optionally prorate the price we charge next month to make up for any price changes. To preview how the proration will be calculated, use the <a href="#upcoming_invoice">upcoming invoice</a> endpoint.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `subscription_exposed_id` - _required_

### DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount
<blockquote><p>Removes the currently applied discount on a customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `subscription_exposed_id` - _required_

### PostCustomersCustomerTaxIds
<blockquote><p>Creates a new <code>TaxID</code> object for a customer.</p></blockquote>

#### Input Parameters
* `customer` - _required_

### DeleteCustomersCustomerTaxIdsId
<blockquote><p>Deletes an existing <code>TaxID</code> object.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `id` - _required_

### GetCustomersCustomerTaxIdsId
<blockquote><p>Retrieves the <code>TaxID</code> object with the given identifier.</p></blockquote>

#### Input Parameters
* `customer` - _required_
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_

### GetDisputesDispute
<blockquote><p>Retrieves the dispute with the given ID.</p></blockquote>

#### Input Parameters
* `dispute` - _required_
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>

### PostDisputesDispute
<blockquote><p>When you get a dispute, contacting your customer is always the best first step. If that doesn't work, you can submit evidence to help us resolve the dispute in your favor. You can do this in your <a href="https://dashboard.stripe.com/disputes">dashboard</a>, but if you prefer, you can use the API to submit evidence programmatically.</p>

<p>Depending on your dispute type, different evidence fields will give you a better chance of winning your dispute. To figure out which evidence fields to provide, see our <a href="/docs/disputes/categories">guide to dispute types</a>.</p></blockquote>

#### Input Parameters
* `dispute` - _required_

### PostDisputesDisputeClose
<blockquote><p>Closing the dispute for a charge indicates that you do not have any evidence to submit and are essentially dismissing the dispute, acknowledging it as lost.</p>

<p>The status of the dispute will change from <code>needs_response</code> to <code>lost</code>. <em>Closing a dispute is irreversible</em>.</p></blockquote>

#### Input Parameters
* `dispute` - _required_

### PostEphemeralKeys
<blockquote><p>Creates a short-lived API key for a given resource.</p></blockquote>

### DeleteEphemeralKeysKey
<blockquote><p>Invalidates a short-lived API key for a given resource.</p></blockquote>

#### Input Parameters
* `key` - _required_

### GetEventsId
<blockquote><p>Retrieves the details of an event. Supply the unique identifier of the event, which you might have received in a webhook.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_

### GetExchangeRatesRateId
<blockquote><p>Retrieves the exchange rates from the given currency to every supported currency.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `rate_id` - _required_

### PostFileLinks
<blockquote><p>Creates a new file link object.</p></blockquote>

### GetFileLinksLink
<blockquote><p>Retrieves the file link with the given ID.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `link` - _required_

### PostFileLinksLink
<blockquote><p>Updates an existing file link object. Expired links can no longer be updated.</p></blockquote>

#### Input Parameters
* `link` - _required_

### PostFiles
<blockquote><p>To upload a file to Stripe, you'll need to send a request of type <code>multipart/form-data</code>. The request should contain the file you would like to upload, as well as the parameters for creating a file.</p>

<p>All of Stripe's officially supported Client libraries should have support for sending <code>multipart/form-data</code>.</p></blockquote>

### GetFilesFile
<blockquote><p>Retrieves the details of an existing file object. Supply the unique file ID from a file, and Stripe will return the corresponding file object. To access file contents, see the <a href="/docs/file-upload#download-file-contents">File Upload Guide</a>.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `file` - _required_

### GetIdentityVerificationReportsReport
<blockquote><p>Retrieves an existing VerificationReport</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `report` - _required_

### PostIdentityVerificationSessions
<blockquote><p>Creates a VerificationSession object.</p>

<p>After the VerificationSession is created, display a verification modal using the session <code>client_secret</code> or send your users to the session's <code>url</code>.</p>

<p>If your API key is in test mode, verification checks won't actually process, though everything else will occur as if in live mode.</p>

<p>Related guide: <a href="/docs/identity/verify-identity-documents">Verify your users' identity documents</a>.</p></blockquote>

### GetIdentityVerificationSessionsSession
<blockquote><p>Retrieves the details of a VerificationSession that was previously created.</p>

<p>When the session status is <code>requires_input</code>, you can use this method to retrieve a valid
<code>client_secret</code> or <code>url</code> to allow re-submission.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `session` - _required_

### PostIdentityVerificationSessionsSession
<blockquote><p>Updates a VerificationSession object.</p>

<p>When the session status is <code>requires_input</code>, you can use this method to update the
verification check and options.</p></blockquote>

#### Input Parameters
* `session` - _required_

### PostIdentityVerificationSessionsSessionCancel
<blockquote><p>A VerificationSession object can be canceled when it is in <code>requires_input</code> <a href="/docs/identity/how-sessions-work">status</a>.</p>

<p>Once canceled, future submission attempts are disabled. This cannot be undone. <a href="/docs/identity/verification-sessions#cancel">Learn more</a>.</p></blockquote>

#### Input Parameters
* `session` - _required_

### PostIdentityVerificationSessionsSessionRedact
<blockquote><p>Redact a VerificationSession to remove all collected information from Stripe. This will redact
the VerificationSession and all objects related to it, including VerificationReports, Events,
request logs, etc.</p>

<p>A VerificationSession object can be redacted when it is in <code>requires_input</code> or <code>verified</code>
<a href="/docs/identity/how-sessions-work">status</a>. Redacting a VerificationSession in <code>requires_action</code>
state will automatically cancel it.</p>

<p>The redaction process may take up to four days. When the redaction process is in progress, the
VerificationSession's <code>redaction.status</code> field will be set to <code>processing</code>; when the process is
finished, it will change to <code>redacted</code> and an <code>identity.verification_session.redacted</code> event
will be emitted.</p>

<p>Redaction is irreversible. Redacted objects are still accessible in the Stripe API, but all the
fields that contain personal data will be replaced by the string <code>[redacted]</code> or a similar
placeholder. The <code>metadata</code> field will also be erased. Redacted objects cannot be updated or
used for any purpose.</p>

<p><a href="/docs/identity/verification-sessions#redact">Learn more</a>.</p></blockquote>

#### Input Parameters
* `session` - _required_

### PostInvoiceitems
<blockquote><p>Creates an item to be added to a draft invoice (up to 250 items per invoice). If no invoice is specified, the item will be on the next invoice created for the customer specified.</p></blockquote>

### DeleteInvoiceitemsInvoiceitem
<blockquote><p>Deletes an invoice item, removing it from an invoice. Deleting invoice items is only possible when they're not attached to invoices, or if it's attached to a draft invoice.</p></blockquote>

#### Input Parameters
* `invoiceitem` - _required_

### GetInvoiceitemsInvoiceitem
<blockquote><p>Retrieves the invoice item with the given ID.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `invoiceitem` - _required_

### PostInvoiceitemsInvoiceitem
<blockquote><p>Updates the amount or description of an invoice item on an upcoming invoice. Updating an invoice item is only possible before the invoice it's attached to is closed.</p></blockquote>

#### Input Parameters
* `invoiceitem` - _required_

### PostInvoices
<blockquote><p>This endpoint creates a draft invoice for a given customer. The draft invoice created pulls in all pending invoice items on that customer, including prorations. The invoice remains a draft until you <a href="#finalize_invoice">finalize</a> the invoice, which allows you to <a href="#pay_invoice">pay</a> or <a href="#send_invoice">send</a> the invoice to your customers.</p></blockquote>

### DeleteInvoicesInvoice
<blockquote><p>Permanently deletes a one-off invoice draft. This cannot be undone. Attempts to delete invoices that are no longer in a draft state will fail; once an invoice has been finalized or if an invoice is for a subscription, it must be <a href="#void_invoice">voided</a>.</p></blockquote>

#### Input Parameters
* `invoice` - _required_

### GetInvoicesInvoice
<blockquote><p>Retrieves the invoice with the given ID.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `invoice` - _required_

### PostInvoicesInvoice
<blockquote><p>Draft invoices are fully editable. Once an invoice is <a href="/docs/billing/invoices/workflow#finalized">finalized</a>,
monetary values, as well as <code>collection_method</code>, become uneditable.</p>

<p>If you would like to stop the Stripe Billing engine from automatically finalizing, reattempting payments on,
sending reminders for, or <a href="/docs/billing/invoices/reconciliation">automatically reconciling</a> invoices, pass
<code>auto_advance=false</code>.</p></blockquote>

#### Input Parameters
* `invoice` - _required_

### PostInvoicesInvoiceFinalize
<blockquote><p>Stripe automatically finalizes drafts before sending and attempting payment on invoices. However, if you'd like to finalize a draft invoice manually, you can do so using this method.</p></blockquote>

#### Input Parameters
* `invoice` - _required_

### PostInvoicesInvoiceMarkUncollectible
<blockquote><p>Marking an invoice as uncollectible is useful for keeping track of bad debts that can be written off for accounting purposes.</p></blockquote>

#### Input Parameters
* `invoice` - _required_

### PostInvoicesInvoicePay
<blockquote><p>Stripe automatically creates and then attempts to collect payment on invoices for customers on subscriptions according to your <a href="https://dashboard.stripe.com/account/billing/automatic">subscriptions settings</a>. However, if you'd like to attempt payment on an invoice out of the normal collection schedule or for some other reason, you can do so.</p></blockquote>

#### Input Parameters
* `invoice` - _required_

### PostInvoicesInvoiceSend
<blockquote><p>Stripe will automatically send invoices to customers according to your <a href="https://dashboard.stripe.com/account/billing/automatic">subscriptions settings</a>. However, if you'd like to manually send an invoice to your customer out of the normal schedule, you can do so. When sending invoices that have already been paid, there will be no reference to the payment in the email.</p>

<p>Requests made in test-mode result in no emails being sent, despite sending an <code>invoice.sent</code> event.</p></blockquote>

#### Input Parameters
* `invoice` - _required_

### PostInvoicesInvoiceVoid
<blockquote><p>Mark a finalized invoice as void. This cannot be undone. Voiding an invoice is similar to <a href="#delete_invoice">deletion</a>, however it only applies to finalized invoices and maintains a papertrail where the invoice can still be found.</p></blockquote>

#### Input Parameters
* `invoice` - _required_

### GetIssuerFraudRecordsIssuerFraudRecord
<blockquote><p>Retrieves the details of an issuer fraud record that has previously been created. </p>

<p>Please refer to the <a href="#issuer_fraud_record_object">issuer fraud record</a> object reference for more details.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `issuer_fraud_record` - _required_

### GetIssuingAuthorizationsAuthorization
<blockquote><p>Retrieves an Issuing <code>Authorization</code> object.</p></blockquote>

#### Input Parameters
* `authorization` - _required_
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>

### PostIssuingAuthorizationsAuthorization
<blockquote><p>Updates the specified Issuing <code>Authorization</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p></blockquote>

#### Input Parameters
* `authorization` - _required_

### PostIssuingAuthorizationsAuthorizationApprove
<blockquote><p>Approves a pending Issuing <code>Authorization</code> object. This request should be made within the timeout window of the <a href="/docs/issuing/controls/real-time-authorizations">real-time authorization</a> flow.</p></blockquote>

#### Input Parameters
* `authorization` - _required_

### PostIssuingAuthorizationsAuthorizationDecline
<blockquote><p>Declines a pending Issuing <code>Authorization</code> object. This request should be made within the timeout window of the <a href="/docs/issuing/controls/real-time-authorizations">real time authorization</a> flow.</p></blockquote>

#### Input Parameters
* `authorization` - _required_

### PostIssuingCardholders
<blockquote><p>Creates a new Issuing <code>Cardholder</code> object that can be issued cards.</p></blockquote>

### GetIssuingCardholdersCardholder
<blockquote><p>Retrieves an Issuing <code>Cardholder</code> object.</p></blockquote>

#### Input Parameters
* `cardholder` - _required_
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>

### PostIssuingCardholdersCardholder
<blockquote><p>Updates the specified Issuing <code>Cardholder</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p></blockquote>

#### Input Parameters
* `cardholder` - _required_

### PostIssuingCards
<blockquote><p>Creates an Issuing <code>Card</code> object.</p></blockquote>

### GetIssuingCardsCard
<blockquote><p>Retrieves an Issuing <code>Card</code> object.</p></blockquote>

#### Input Parameters
* `card` - _required_
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>

### PostIssuingCardsCard
<blockquote><p>Updates the specified Issuing <code>Card</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p></blockquote>

#### Input Parameters
* `card` - _required_

### PostIssuingDisputes
<blockquote><p>Creates an Issuing <code>Dispute</code> object. Individual pieces of evidence within the <code>evidence</code> object are optional at this point. Stripe only validates that required evidence is present during submission. Refer to <a href="/docs/issuing/purchases/disputes#dispute-reasons-and-evidence">Dispute reasons and evidence</a> for more details about evidence requirements.</p></blockquote>

### GetIssuingDisputesDispute
<blockquote><p>Retrieves an Issuing <code>Dispute</code> object.</p></blockquote>

#### Input Parameters
* `dispute` - _required_
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>

### PostIssuingDisputesDispute
<blockquote><p>Updates the specified Issuing <code>Dispute</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Properties on the <code>evidence</code> object can be unset by passing in an empty string.</p></blockquote>

#### Input Parameters
* `dispute` - _required_

### PostIssuingDisputesDisputeSubmit
<blockquote><p>Submits an Issuing <code>Dispute</code> to the card network. Stripe validates that all evidence fields required for the dispute's reason are present. For more details, see <a href="/docs/issuing/purchases/disputes#dispute-reasons-and-evidence">Dispute reasons and evidence</a>.</p></blockquote>

#### Input Parameters
* `dispute` - _required_

### GetIssuingSettlementsSettlement
<blockquote><p>Retrieves an Issuing <code>Settlement</code> object.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `settlement` - _required_

### PostIssuingSettlementsSettlement
<blockquote><p>Updates the specified Issuing <code>Settlement</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p></blockquote>

#### Input Parameters
* `settlement` - _required_

### GetIssuingTransactionsTransaction
<blockquote><p>Retrieves an Issuing <code>Transaction</code> object.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `transaction` - _required_

### PostIssuingTransactionsTransaction
<blockquote><p>Updates the specified Issuing <code>Transaction</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p></blockquote>

#### Input Parameters
* `transaction` - _required_

### GetMandatesMandate
<blockquote><p>Retrieves a Mandate object.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `mandate` - _required_

### GetOrderReturnsId
<blockquote><p>Retrieves the details of an existing order return. Supply the unique order ID from either an order return creation request or the order return list, and Stripe will return the corresponding order information.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_

### PostOrders
<blockquote><p>Creates a new order object.</p></blockquote>

### GetOrdersId
<blockquote><p>Retrieves the details of an existing order. Supply the unique order ID from either an order creation request or the order list, and Stripe will return the corresponding order information.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_

### PostOrdersId
<blockquote><p>Updates the specific order by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p></blockquote>

#### Input Parameters
* `id` - _required_

### PostOrdersIdPay
<blockquote><p>Pay an order by providing a <code>source</code> to create a payment.</p></blockquote>

#### Input Parameters
* `id` - _required_

### PostOrdersIdReturns
<blockquote><p>Return all or part of an order. The order must have a status of <code>paid</code> or <code>fulfilled</code> before it can be returned. Once all items have been returned, the order will become <code>canceled</code> or <code>returned</code> depending on which status the order started in.</p></blockquote>

#### Input Parameters
* `id` - _required_

### PostPaymentIntents
<blockquote><p>Creates a PaymentIntent object.</p>

<p>After the PaymentIntent is created, attach a payment method and <a href="/docs/api/payment_intents/confirm">confirm</a>
to continue the payment. You can read more about the different payment flows
available via the Payment Intents API <a href="/docs/payments/payment-intents">here</a>.</p>

<p>When <code>confirm=true</code> is used during creation, it is equivalent to creating
and confirming the PaymentIntent in the same call. You may use any parameters
available in the <a href="/docs/api/payment_intents/confirm">confirm API</a> when <code>confirm=true</code>
is supplied.</p></blockquote>

### GetPaymentIntentsIntent
<blockquote><p>Retrieves the details of a PaymentIntent that has previously been created. </p>

<p>Client-side retrieval using a publishable key is allowed when the <code>client_secret</code> is provided in the query string. </p>

<p>When retrieved with a publishable key, only a subset of properties will be returned. Please refer to the <a href="#payment_intent_object">payment intent</a> object reference for more details.</p></blockquote>

#### Input Parameters
* `client_secret` - _optional_ - The client secret of the PaymentIntent. Required if a publishable key is used to retrieve the source.<br/>
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `intent` - _required_

### PostPaymentIntentsIntent
<blockquote><p>Updates properties on a PaymentIntent object without confirming.</p>

<p>Depending on which properties you update, you may need to confirm the
PaymentIntent again. For example, updating the <code>payment_method</code> will
always require you to confirm the PaymentIntent again. If you prefer to
update and confirm at the same time, we recommend updating properties via
the <a href="/docs/api/payment_intents/confirm">confirm API</a> instead.</p></blockquote>

#### Input Parameters
* `intent` - _required_

### PostPaymentIntentsIntentCancel
<blockquote><p>A PaymentIntent object can be canceled when it is in one of these statuses: <code>requires_payment_method</code>, <code>requires_capture</code>, <code>requires_confirmation</code>, or <code>requires_action</code>. </p>

<p>Once canceled, no additional charges will be made by the PaymentIntent and any operations on the PaymentIntent will fail with an error. For PaymentIntents with <code>status='requires_capture'</code>, the remaining <code>amount_capturable</code> will automatically be refunded.</p></blockquote>

#### Input Parameters
* `intent` - _required_

### PostPaymentIntentsIntentCapture
<blockquote><p>Capture the funds of an existing uncaptured PaymentIntent when its status is <code>requires_capture</code>.</p>

<p>Uncaptured PaymentIntents will be canceled exactly seven days after they are created.</p>

<p>Learn more about <a href="/docs/payments/capture-later">separate authorization and capture</a>.</p></blockquote>

#### Input Parameters
* `intent` - _required_

### PostPaymentIntentsIntentConfirm
<blockquote><p>Confirm that your customer intends to pay with current or provided
payment method. Upon confirmation, the PaymentIntent will attempt to initiate
a payment.</p>

<p>If the selected payment method requires additional authentication steps, the
PaymentIntent will transition to the <code>requires_action</code> status and
suggest additional actions via <code>next_action</code>. If payment fails,
the PaymentIntent will transition to the <code>requires_payment_method</code> status. If
payment succeeds, the PaymentIntent will transition to the <code>succeeded</code>
status (or <code>requires_capture</code>, if <code>capture_method</code> is set to <code>manual</code>).</p>

<p>If the <code>confirmation_method</code> is <code>automatic</code>, payment may be attempted
using our <a href="/docs/stripe-js/reference#stripe-handle-card-payment">client SDKs</a>
and the PaymentIntent's <a href="#payment_intent_object-client_secret">client_secret</a>.
After <code>next_action</code>s are handled by the client, no additional
confirmation is required to complete the payment.</p>

<p>If the <code>confirmation_method</code> is <code>manual</code>, all payment attempts must be
initiated using a secret key.
If any actions are required for the payment, the PaymentIntent will
return to the <code>requires_confirmation</code> state
after those actions are completed. Your server needs to then
explicitly re-confirm the PaymentIntent to initiate the next payment
attempt. Read the <a href="/docs/payments/payment-intents/web-manual">expanded documentation</a>
to learn more about manual confirmation.</p></blockquote>

#### Input Parameters
* `intent` - _required_

### PostPaymentMethods
<blockquote><p>Creates a PaymentMethod object. Read the <a href="/docs/stripe-js/reference#stripe-create-payment-method">Stripe.js reference</a> to learn how to create PaymentMethods via Stripe.js.</p>

<p>Instead of creating a PaymentMethod directly, we recommend using the <a href="/docs/payments/accept-a-payment">PaymentIntents</a> API to accept a payment immediately or the <a href="/docs/payments/save-and-reuse">SetupIntent</a> API to collect payment method details ahead of a future payment.</p></blockquote>

### GetPaymentMethodsPaymentMethod
<blockquote><p>Retrieves a PaymentMethod object.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `payment_method` - _required_

### PostPaymentMethodsPaymentMethod
<blockquote><p>Updates a PaymentMethod object. A PaymentMethod must be attached a customer to be updated.</p></blockquote>

#### Input Parameters
* `payment_method` - _required_

### PostPaymentMethodsPaymentMethodAttach
<blockquote><p>Attaches a PaymentMethod object to a Customer.</p>

<p>To attach a new PaymentMethod to a customer for future payments, we recommend you use a <a href="/docs/api/setup_intents">SetupIntent</a>
or a PaymentIntent with <a href="/docs/api/payment_intents/create#create_payment_intent-setup_future_usage">setup_future_usage</a>.
These approaches will perform any necessary steps to ensure that the PaymentMethod can be used in a future payment. Using the
<code>/v1/payment_methods/:id/attach</code> endpoint does not ensure that future payments can be made with the attached PaymentMethod.
See <a href="/docs/payments/payment-intents#future-usage">Optimizing cards for future payments</a> for more information about setting up future payments.</p>

<p>To use this PaymentMethod as the default for invoice or subscription payments,
set <a href="/docs/api/customers/update#update_customer-invoice_settings-default_payment_method"><code>invoice_settings.default_payment_method</code></a>,
on the Customer to the PaymentMethod's ID.</p></blockquote>

#### Input Parameters
* `payment_method` - _required_

### PostPaymentMethodsPaymentMethodDetach
<blockquote><p>Detaches a PaymentMethod object from a Customer.</p></blockquote>

#### Input Parameters
* `payment_method` - _required_

### PostPayouts
<blockquote><p>To send funds to your own bank account, you create a new payout object. Your <a href="#balance">Stripe balance</a> must be able to cover the payout amount, or you'll receive an "Insufficient Funds" error.</p>

<p>If your API key is in test mode, money won't actually be sent, though everything else will occur as if in live mode.</p>

<p>If you are creating a manual payout on a Stripe account that uses multiple payment source types, you'll need to specify the source type balance that the payout should draw from. The <a href="#balance_object">balance object</a> details available and pending amounts by source type.</p></blockquote>

### GetPayoutsPayout
<blockquote><p>Retrieves the details of an existing payout. Supply the unique payout ID from either a payout creation request or the payout list, and Stripe will return the corresponding payout information.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `payout` - _required_

### PostPayoutsPayout
<blockquote><p>Updates the specified payout by setting the values of the parameters passed. Any parameters not provided will be left unchanged. This request accepts only the metadata as arguments.</p></blockquote>

#### Input Parameters
* `payout` - _required_

### PostPayoutsPayoutCancel
<blockquote><p>A previously created payout can be canceled if it has not yet been paid out. Funds will be refunded to your available balance. You may not cancel automatic Stripe payouts.</p></blockquote>

#### Input Parameters
* `payout` - _required_

### PostPayoutsPayoutReverse
<blockquote><p>Reverses a payout by debiting the destination bank account. Only payouts for connected accounts to US bank accounts may be reversed at this time. If the payout is in the <code>pending</code> status, <code>/v1/payouts/:id/cancel</code> should be used instead.</p>

<p>By requesting a reversal via <code>/v1/payouts/:id/reverse</code>, you confirm that the authorized signatory of the selected bank account has authorized the debit on the bank account and that no other authorization is required.</p></blockquote>

#### Input Parameters
* `payout` - _required_

### PostPlans
<blockquote><p>You can now model subscriptions more flexibly using the <a href="#prices">Prices API</a>. It replaces the Plans API and is backwards compatible to simplify your migration.</p></blockquote>

### DeletePlansPlan
<blockquote><p>Deleting plans means new subscribers can't be added. Existing subscribers aren't affected.</p></blockquote>

#### Input Parameters
* `plan` - _required_

### GetPlansPlan
<blockquote><p>Retrieves the plan with the given ID.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `plan` - _required_

### PostPlansPlan
<blockquote><p>Updates the specified plan by setting the values of the parameters passed. Any parameters not provided are left unchanged. By design, you cannot change a plan's ID, amount, currency, or billing cycle.</p></blockquote>

#### Input Parameters
* `plan` - _required_

### PostPrices
<blockquote><p>Creates a new price for an existing product. The price can be recurring or one-time.</p></blockquote>

### GetPricesPrice
<blockquote><p>Retrieves the price with the given ID.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `price` - _required_

### PostPricesPrice
<blockquote><p>Updates the specified price by setting the values of the parameters passed. Any parameters not provided are left unchanged.</p></blockquote>

#### Input Parameters
* `price` - _required_

### PostProducts
<blockquote><p>Creates a new product object.</p></blockquote>

### DeleteProductsId
<blockquote><p>Delete a product. Deleting a product is only possible if it has no prices associated with it. Additionally, deleting a product with <code>type=good</code> is only possible if it has no SKUs associated with it.</p></blockquote>

#### Input Parameters
* `id` - _required_

### GetProductsId
<blockquote><p>Retrieves the details of an existing product. Supply the unique product ID from either a product creation request or the product list, and Stripe will return the corresponding product information.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_

### PostProductsId
<blockquote><p>Updates the specific product by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p></blockquote>

#### Input Parameters
* `id` - _required_

### PostPromotionCodes
<blockquote><p>A promotion code points to a coupon. You can optionally restrict the code to a specific customer, redemption limit, and expiration date.</p></blockquote>

### GetPromotionCodesPromotionCode
<blockquote><p>Retrieves the promotion code with the given ID.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `promotion_code` - _required_

### PostPromotionCodesPromotionCode
<blockquote><p>Updates the specified promotion code by setting the values of the parameters passed. Most fields are, by design, not editable.</p></blockquote>

#### Input Parameters
* `promotion_code` - _required_

### PostQuotes
<blockquote><p>A quote models prices and services for a customer. Default options for <code>header</code>, <code>description</code>, <code>footer</code>, and <code>expires_at</code> can be set in the dashboard via the <a href="https://dashboard.stripe.com/settings/billing/quote">quote template</a>.</p></blockquote>

### GetQuotesQuote
<blockquote><p>Retrieves the quote with the given ID.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `quote` - _required_

### PostQuotesQuote
<blockquote><p>A quote models prices and services for a customer.</p></blockquote>

#### Input Parameters
* `quote` - _required_

### PostQuotesQuoteAccept
<blockquote><p>Accepts the specified quote.</p></blockquote>

#### Input Parameters
* `quote` - _required_

### PostQuotesQuoteCancel
<blockquote><p>Cancels the quote.</p></blockquote>

#### Input Parameters
* `quote` - _required_

### PostQuotesQuoteFinalize
<blockquote><p>Finalizes the quote.</p></blockquote>

#### Input Parameters
* `quote` - _required_

### GetRadarEarlyFraudWarningsEarlyFraudWarning
<blockquote><p>Retrieves the details of an early fraud warning that has previously been created. </p>

<p>Please refer to the <a href="#early_fraud_warning_object">early fraud warning</a> object reference for more details.</p></blockquote>

#### Input Parameters
* `early_fraud_warning` - _required_
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>

### PostRadarValueListItems
<blockquote><p>Creates a new <code>ValueListItem</code> object, which is added to the specified parent value list.</p></blockquote>

### DeleteRadarValueListItemsItem
<blockquote><p>Deletes a <code>ValueListItem</code> object, removing it from its parent value list.</p></blockquote>

#### Input Parameters
* `item` - _required_

### GetRadarValueListItemsItem
<blockquote><p>Retrieves a <code>ValueListItem</code> object.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `item` - _required_

### PostRadarValueLists
<blockquote><p>Creates a new <code>ValueList</code> object, which can then be referenced in rules.</p></blockquote>

### DeleteRadarValueListsValueList
<blockquote><p>Deletes a <code>ValueList</code> object, also deleting any items contained within the value list. To be deleted, a value list must not be referenced in any rules.</p></blockquote>

#### Input Parameters
* `value_list` - _required_

### GetRadarValueListsValueList
<blockquote><p>Retrieves a <code>ValueList</code> object.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `value_list` - _required_

### PostRadarValueListsValueList
<blockquote><p>Updates a <code>ValueList</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Note that <code>item_type</code> is immutable.</p></blockquote>

#### Input Parameters
* `value_list` - _required_

### PostRecipients
<blockquote><p>Creates a new <code>Recipient</code> object and verifies the recipient's identity.
Also verifies the recipient's bank account information or debit card, if either is provided.</p></blockquote>

### DeleteRecipientsId
<blockquote><p>Permanently deletes a recipient. It cannot be undone.</p></blockquote>

#### Input Parameters
* `id` - _required_

### GetRecipientsId
<blockquote><p>Retrieves the details of an existing recipient. You need only supply the unique recipient identifier that was returned upon recipient creation.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_

### PostRecipientsId
<blockquote><p>Updates the specified recipient by setting the values of the parameters passed.
Any parameters not provided will be left unchanged.</p>

<p>If you update the name or tax ID, the identity verification will automatically be rerun.
If you update the bank account, the bank account validation will automatically be rerun.</p></blockquote>

#### Input Parameters
* `id` - _required_

### PostRefunds
<blockquote><p>Create a refund.</p></blockquote>

### GetRefundsRefund
<blockquote><p>Retrieves the details of an existing refund.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `refund` - _required_

### PostRefundsRefund
<blockquote><p>Updates the specified refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>This request only accepts <code>metadata</code> as an argument.</p></blockquote>

#### Input Parameters
* `refund` - _required_

### PostReportingReportRuns
<blockquote><p>Creates a new object and begin running the report. (Certain report types require a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p></blockquote>

### GetReportingReportRunsReportRun
<blockquote><p>Retrieves the details of an existing Report Run.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `report_run` - _required_

### GetReportingReportTypesReportType
<blockquote><p>Retrieves the details of a Report Type. (Certain report types require a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `report_type` - _required_

### GetReviewsReview
<blockquote><p>Retrieves a <code>Review</code> object.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `review` - _required_

### PostReviewsReviewApprove
<blockquote><p>Approves a <code>Review</code> object, closing it and removing it from the list of reviews.</p></blockquote>

#### Input Parameters
* `review` - _required_

### PostSetupIntents
<blockquote><p>Creates a SetupIntent object.</p>

<p>After the SetupIntent is created, attach a payment method and <a href="/docs/api/setup_intents/confirm">confirm</a>
to collect any required permissions to charge the payment method later.</p></blockquote>

### GetSetupIntentsIntent
<blockquote><p>Retrieves the details of a SetupIntent that has previously been created. </p>

<p>Client-side retrieval using a publishable key is allowed when the <code>client_secret</code> is provided in the query string. </p>

<p>When retrieved with a publishable key, only a subset of properties will be returned. Please refer to the <a href="#setup_intent_object">SetupIntent</a> object reference for more details.</p></blockquote>

#### Input Parameters
* `client_secret` - _optional_ - The client secret of the SetupIntent. Required if a publishable key is used to retrieve the SetupIntent.<br/>
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `intent` - _required_

### PostSetupIntentsIntent
<blockquote><p>Updates a SetupIntent object.</p></blockquote>

#### Input Parameters
* `intent` - _required_

### PostSetupIntentsIntentCancel
<blockquote><p>A SetupIntent object can be canceled when it is in one of these statuses: <code>requires_payment_method</code>, <code>requires_confirmation</code>, or <code>requires_action</code>. </p>

<p>Once canceled, setup is abandoned and any operations on the SetupIntent will fail with an error.</p></blockquote>

#### Input Parameters
* `intent` - _required_

### PostSetupIntentsIntentConfirm
<blockquote><p>Confirm that your customer intends to set up the current or
provided payment method. For example, you would confirm a SetupIntent
when a customer hits the "Save" button on a payment method management
page on your website.</p>

<p>If the selected payment method does not require any additional
steps from the customer, the SetupIntent will transition to the
<code>succeeded</code> status.</p>

<p>Otherwise, it will transition to the <code>requires_action</code> status and
suggest additional actions via <code>next_action</code>. If setup fails,
the SetupIntent will transition to the
<code>requires_payment_method</code> status.</p></blockquote>

#### Input Parameters
* `intent` - _required_

### GetSigmaScheduledQueryRunsScheduledQueryRun
<blockquote><p>Retrieves the details of an scheduled query run.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `scheduled_query_run` - _required_

### PostSkus
<blockquote><p>Creates a new SKU associated with a product.</p></blockquote>

### DeleteSkusId
<blockquote><p>Delete a SKU. Deleting a SKU is only possible until it has been used in an order.</p></blockquote>

#### Input Parameters
* `id` - _required_

### GetSkusId
<blockquote><p>Retrieves the details of an existing SKU. Supply the unique SKU identifier from either a SKU creation request or from the product, and Stripe will return the corresponding SKU information.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_

### PostSkusId
<blockquote><p>Updates the specific SKU by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>Note that a SKU's <code>attributes</code> are not editable. Instead, you would need to deactivate the existing SKU and create a new one with the new attribute values.</p></blockquote>

#### Input Parameters
* `id` - _required_

### PostSources
<blockquote><p>Creates a new source object.</p></blockquote>

### GetSourcesSource
<blockquote><p>Retrieves an existing source object. Supply the unique source ID from a source creation request and Stripe will return the corresponding up-to-date source object information.</p></blockquote>

#### Input Parameters
* `client_secret` - _optional_ - The client secret of the source. Required if a publishable key is used to retrieve the source.<br/>
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `source` - _required_

### PostSourcesSource
<blockquote><p>Updates the specified source by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>This request accepts the <code>metadata</code> and <code>owner</code> as arguments. It is also possible to update type specific information for selected payment methods. Please refer to our <a href="/docs/sources">payment method guides</a> for more detail.</p></blockquote>

#### Input Parameters
* `source` - _required_

### GetSourcesSourceMandateNotificationsMandateNotification
<blockquote><p>Retrieves a new Source MandateNotification.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `mandate_notification` - _required_
* `source` - _required_

### GetSourcesSourceSourceTransactionsSourceTransaction
<blockquote><p>Retrieve an existing source transaction object. Supply the unique source ID from a source creation request and the source transaction ID and Stripe will return the corresponding up-to-date source object information.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `source` - _required_
* `source_transaction` - _required_

### PostSourcesSourceVerify
<blockquote><p>Verify a given source.</p></blockquote>

#### Input Parameters
* `source` - _required_

### PostSubscriptionItems
<blockquote><p>Adds a new item to an existing subscription. No existing items will be changed or replaced.</p></blockquote>

### DeleteSubscriptionItemsItem
<blockquote><p>Deletes an item from the subscription. Removing a subscription item from a subscription will not cancel the subscription.</p></blockquote>

#### Input Parameters
* `item` - _required_

### GetSubscriptionItemsItem
<blockquote><p>Retrieves the subscription item with the given ID.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `item` - _required_

### PostSubscriptionItemsItem
<blockquote><p>Updates the plan or quantity of an item on a current subscription.</p></blockquote>

#### Input Parameters
* `item` - _required_

### PostSubscriptionItemsSubscriptionItemUsageRecords
<blockquote><p>Creates a usage record for a specified subscription item and date, and fills it with a quantity.</p>

<p>Usage records provide <code>quantity</code> information that Stripe uses to track how much a customer is using your service. With usage information and the pricing model set up by the <a href="https://stripe.com/docs/billing/subscriptions/metered-billing">metered billing</a> plan, Stripe helps you send accurate invoices to your customers.</p>

<p>The default calculation for usage is to add up all the <code>quantity</code> values of the usage records within a billing period. You can change this default behavior with the billing plan's <code>aggregate_usage</code> <a href="/docs/api/plans/create#create_plan-aggregate_usage">parameter</a>. When there is more than one usage record with the same timestamp, Stripe adds the <code>quantity</code> values together. In most cases, this is the desired resolution, however, you can change this behavior with the <code>action</code> parameter.</p>

<p>The default pricing model for metered billing is <a href="/docs/api/plans/object#plan_object-billing_scheme">per-unit pricing</a>. For finer granularity, you can configure metered billing to have a <a href="https://stripe.com/docs/billing/subscriptions/tiers">tiered pricing</a> model.</p></blockquote>

#### Input Parameters
* `subscription_item` - _required_

### PostSubscriptionSchedules
<blockquote><p>Creates a new subscription schedule object. Each customer can have up to 500 active or scheduled subscriptions.</p></blockquote>

### GetSubscriptionSchedulesSchedule
<blockquote><p>Retrieves the details of an existing subscription schedule. You only need to supply the unique subscription schedule identifier that was returned upon subscription schedule creation.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `schedule` - _required_

### PostSubscriptionSchedulesSchedule
<blockquote><p>Updates an existing subscription schedule.</p></blockquote>

#### Input Parameters
* `schedule` - _required_

### PostSubscriptionSchedulesScheduleCancel
<blockquote><p>Cancels a subscription schedule and its associated subscription immediately (if the subscription schedule has an active subscription). A subscription schedule can only be canceled if its status is <code>not_started</code> or <code>active</code>.</p></blockquote>

#### Input Parameters
* `schedule` - _required_

### PostSubscriptionSchedulesScheduleRelease
<blockquote><p>Releases the subscription schedule immediately, which will stop scheduling of its phases, but leave any existing subscription in place. A schedule can only be released if its status is <code>not_started</code> or <code>active</code>. If the subscription schedule is currently associated with a subscription, releasing it will remove its <code>subscription</code> property and set the subscription's ID to the <code>released_subscription</code> property.</p></blockquote>

#### Input Parameters
* `schedule` - _required_

### PostSubscriptions
<blockquote><p>Creates a new subscription on an existing customer. Each customer can have up to 500 active or scheduled subscriptions.</p></blockquote>

### DeleteSubscriptionsSubscriptionExposedId
<blockquote><p>Cancels a customer's subscription immediately. The customer will not be charged again for the subscription.</p>

<p>Note, however, that any pending invoice items that you've created will still be charged for at the end of the period, unless manually <a href="#delete_invoiceitem">deleted</a>. If you've set the subscription to cancel at the end of the period, any pending prorations will also be left in place and collected at the end of the period. But if the subscription is set to cancel immediately, pending prorations will be removed.</p>

<p>By default, upon subscription cancellation, Stripe will stop automatic collection of all finalized invoices for the customer. This is intended to prevent unexpected payment attempts after the customer has canceled a subscription. However, you can resume automatic collection of the invoices manually after subscription cancellation to have us proceed. Or, you could check for unpaid invoices before allowing the customer to cancel the subscription at all.</p></blockquote>

#### Input Parameters
* `subscription_exposed_id` - _required_

### GetSubscriptionsSubscriptionExposedId
<blockquote><p>Retrieves the subscription with the given ID.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `subscription_exposed_id` - _required_

### PostSubscriptionsSubscriptionExposedId
<blockquote><p>Updates an existing subscription on a customer to match the specified parameters. When changing plans or quantities, we will optionally prorate the price we charge next month to make up for any price changes. To preview how the proration will be calculated, use the <a href="#upcoming_invoice">upcoming invoice</a> endpoint.</p></blockquote>

#### Input Parameters
* `subscription_exposed_id` - _required_

### DeleteSubscriptionsSubscriptionExposedIdDiscount
<blockquote><p>Removes the currently applied discount on a subscription.</p></blockquote>

#### Input Parameters
* `subscription_exposed_id` - _required_

### GetTaxCodesId
<blockquote><p>Retrieves the details of an existing tax code. Supply the unique tax code ID and Stripe will return the corresponding tax code information.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_

### PostTaxRates
<blockquote><p>Creates a new tax rate.</p></blockquote>

### GetTaxRatesTaxRate
<blockquote><p>Retrieves a tax rate with the given ID</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `tax_rate` - _required_

### PostTaxRatesTaxRate
<blockquote><p>Updates an existing tax rate.</p></blockquote>

#### Input Parameters
* `tax_rate` - _required_

### PostTerminalConnectionTokens
<blockquote><p>To connect to a reader the Stripe Terminal SDK needs to retrieve a short-lived connection token from Stripe, proxied through your server. On your backend, add an endpoint that creates and returns a connection token.</p></blockquote>

### PostTerminalLocations
<blockquote><p>Creates a new <code>Location</code> object.</p></blockquote>

### DeleteTerminalLocationsLocation
<blockquote><p>Deletes a <code>Location</code> object.</p></blockquote>

#### Input Parameters
* `location` - _required_

### GetTerminalLocationsLocation
<blockquote><p>Retrieves a <code>Location</code> object.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `location` - _required_

### PostTerminalLocationsLocation
<blockquote><p>Updates a <code>Location</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p></blockquote>

#### Input Parameters
* `location` - _required_

### PostTerminalReaders
<blockquote><p>Creates a new <code>Reader</code> object.</p></blockquote>

### DeleteTerminalReadersReader
<blockquote><p>Deletes a <code>Reader</code> object.</p></blockquote>

#### Input Parameters
* `reader` - _required_

### GetTerminalReadersReader
<blockquote><p>Retrieves a <code>Reader</code> object.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `reader` - _required_

### PostTerminalReadersReader
<blockquote><p>Updates a <code>Reader</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p></blockquote>

#### Input Parameters
* `reader` - _required_

### PostTokens
<blockquote><p>Creates a single-use token that represents a bank account's details.
This token can be used with any API method in place of a bank account dictionary. This token can be used only once, by attaching it to a <a href="#accounts">Custom account</a>.</p></blockquote>

### GetTokensToken
<blockquote><p>Retrieves the token with the given ID.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `token` - _required_

### PostTopups
<blockquote><p>Top up the balance of an account</p></blockquote>

### GetTopupsTopup
<blockquote><p>Retrieves the details of a top-up that has previously been created. Supply the unique top-up ID that was returned from your previous request, and Stripe will return the corresponding top-up information.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `topup` - _required_

### PostTopupsTopup
<blockquote><p>Updates the metadata of a top-up. Other top-up details are not editable by design.</p></blockquote>

#### Input Parameters
* `topup` - _required_

### PostTopupsTopupCancel
<blockquote><p>Cancels a top-up. Only pending top-ups can be canceled.</p></blockquote>

#### Input Parameters
* `topup` - _required_

### PostTransfers
<blockquote><p>To send funds from your Stripe account to a connected account, you create a new transfer object. Your <a href="#balance">Stripe balance</a> must be able to cover the transfer amount, or you'll receive an "Insufficient Funds" error.</p></blockquote>

### PostTransfersIdReversals
<blockquote><p>When you create a new reversal, you must specify a transfer to create it on.</p>

<p>When reversing transfers, you can optionally reverse part of the transfer. You can do so as many times as you wish until the entire transfer has been reversed.</p>

<p>Once entirely reversed, a transfer can't be reversed again. This method will return an error when called on an already-reversed transfer, or when trying to reverse more money than is left on a transfer.</p></blockquote>

#### Input Parameters
* `id` - _required_

### GetTransfersTransfer
<blockquote><p>Retrieves the details of an existing transfer. Supply the unique transfer ID from either a transfer creation request or the transfer list, and Stripe will return the corresponding transfer information.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `transfer` - _required_

### PostTransfersTransfer
<blockquote><p>Updates the specified transfer by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>This request accepts only metadata as an argument.</p></blockquote>

#### Input Parameters
* `transfer` - _required_

### GetTransfersTransferReversalsId
<blockquote><p>By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a specific reversal stored on the transfer.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `id` - _required_
* `transfer` - _required_

### PostTransfersTransferReversalsId
<blockquote><p>Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>This request only accepts metadata and description as arguments.</p></blockquote>

#### Input Parameters
* `id` - _required_
* `transfer` - _required_

### PostWebhookEndpoints
<blockquote><p>A webhook endpoint must have a <code>url</code> and a list of <code>enabled_events</code>. You may optionally specify the Boolean <code>connect</code> parameter. If set to true, then a Connect webhook endpoint that notifies the specified <code>url</code> about events from all connected accounts is created; otherwise an account webhook endpoint that notifies the specified <code>url</code> only about events from your account is created. You can also create webhook endpoints in the <a href="https://dashboard.stripe.com/account/webhooks">webhooks settings</a> section of the Dashboard.</p></blockquote>

### DeleteWebhookEndpointsWebhookEndpoint
<blockquote><p>You can also delete webhook endpoints via the <a href="https://dashboard.stripe.com/account/webhooks">webhook endpoint management</a> page of the Stripe dashboard.</p></blockquote>

#### Input Parameters
* `webhook_endpoint` - _required_

### GetWebhookEndpointsWebhookEndpoint
<blockquote><p>Retrieves the webhook endpoint with the given ID.</p></blockquote>

#### Input Parameters
* `expand` - _optional_ - Specifies which fields in the response should be expanded.<br/>
* `webhook_endpoint` - _required_

### PostWebhookEndpointsWebhookEndpoint
<blockquote><p>Updates the webhook endpoint. You may edit the <code>url</code>, the list of <code>enabled_events</code>, and the status of your endpoint.</p></blockquote>

#### Input Parameters
* `webhook_endpoint` - _required_

## License

: stripe-component<br/>
                    <br/>

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
