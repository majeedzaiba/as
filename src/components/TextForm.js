import React from 'react'

export default function TextForm() {
    return (
        <div className="container mb-3">
          <label htmlFor="box" className="form-label">Example textarea</label>
          <textarea className="form-control" id="box" rows="8"></textarea>
        </div>
    )
}
