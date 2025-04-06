import { motion } from 'framer-motion';
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm('mnnpojbz'); // Replace with your Formspree ID

  return (
    <div className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4 gradient-text">Get in Touch</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have a question or want to collaborate? Send me a message!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-8 rounded-xl"
        >
          {state.succeeded ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <h3 className="text-2xl font-semibold mb-2">Thank you!</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your message has been sent. I'll get back to you soon!
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-70"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
                <FiSend className="ml-2" />
              </button>
            </form>
          )}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card p-8 rounded-xl"
        >
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FiMail className="text-blue-500 mt-1 text-xl" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a
                  href="mailto:swarajthakre.stud@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                >
                  swarajthakre.stud@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiPhone className="text-blue-500 mt-1 text-xl" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a
                  href="tel:+919049443446"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                >
                  +91 9049443446
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiMapPin className="text-blue-500 mt-1 text-xl" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Virar, Maharashtra, India
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12">
            <h3 className="font-semibold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/SwarajThakre"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <FiGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/swaraj-thakre2629/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <FiLinkedin className="text-xl" />
              </a>
              <a
                href="https://x.com/thakre_swaraj"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <FiTwitter className="text-xl" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
