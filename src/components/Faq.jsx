import React, { useState } from "react";

const Faq = () => {
  const [openItems, setOpenItems] = useState({});

  const faqData = [
    {
      id: 1,
      question: "How do I reset my password?",
      answer:
        "You can reset your password by clicking the 'Forgot Password' link on the login page. Enter your email address and we'll send you instructions to create a new password.",
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers.",
    },
    {
      id: 3,
      question: "How long does shipping take?",
      answer:
        "Standard shipping typically takes 5-7 business days. Express shipping options are available for 2-3 day delivery at checkout.",
    },
    {
      id: 4,
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period.",
    },
    {
      id: 5,
      question: "Do you offer customer support?",
      answer:
        "We offer 24/7 customer support via live chat, email, and phone. Premium customers also have access to priority support channels.",
    },
    {
      id: 6,
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers.",
    },
  ];

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="container">
      <h2>FAQs</h2>
      <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8 space-y-4 lg:space-y-0">
        {/* First Column */}
        <div className="space-y-4">
          {faqData.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="cursor-pointer w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
              >
                <span className="font-medium text-gray-800 pr-4">
                  {item.question}
                </span>
                <img
                  src="/up-arrow.png"
                  alt={openItems[item.id] ? "Collapse" : "Expand"}
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                    openItems[item.id] ? "" : "rotate-180"
                  }`}
                />
              </button>

              {openItems[item.id] && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Second Column */}
        <div className="space-y-4">
          {faqData.slice(3, 6).map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
              >
                <span className="font-medium text-gray-800 pr-4">
                  {item.question}
                </span>
                <img
                  src="/up-arrow.png"
                  alt={openItems[item.id] ? "Collapse" : "Expand"}
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                    openItems[item.id] ? "" : "rotate-180"
                  }`}
                />
              </button>

              {openItems[item.id] && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
