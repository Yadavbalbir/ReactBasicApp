import React from 'react'
import "./emailList.css"

function EmailList() {
  return (
    <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address" spellcheck="false" data-ms-editor="true"/>
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div>
    </form>
  )
}

export default EmailList