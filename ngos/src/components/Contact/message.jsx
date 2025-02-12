

function MessageField() {
    return (
      <>
        <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg max-w-4xl m-auto border ">
            <h6 className="py-6 text-lg font-medium">Leave Message</h6>
          <form>
            {/* Name Input */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded py-3 px-[14px] text-body-color text-base  bg-[#f0f5f7]  outline-none focus-visible:shadow-none focus:border-blue-700"
              />
            </div>
            
            {/* Email Input */}
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded py-3 px-[14px] text-body-color text-base  bg-[#f0f5f7] outline-none focus-visible:shadow-none focus:border-blue-700"
              />
            </div>
            
            {/* Phone Input */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Phone"
                className="w-full rounded py-3 px-[14px] text-body-color text-base  bg-[#f0f5f7] outline-none focus-visible:shadow-none focus:border-blue-700"
              />
            </div>
            
            {/* Message Textarea */}
            <div className="mb-6">
              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full rounded py-3 px-[14px] text-body-color text-base  bg-[#f0f5f7] resize-none outline-none focus-visible:shadow-none focus:border-blue-700"
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 rounded 
                 p-3 transition hover:bg-opacity-90"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
  
  export default MessageField;
  