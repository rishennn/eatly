import React from 'react'
import FAQItem from './FAQItem/FAQItem'

const question = {
  "How long does delivery take?": "You can get information by contacting our support team. We have 24/7 service. Delivery times may vary depending on your location and order volume, but we strive to deliver within 30-60 minutes.",
  "How Does It Work ?": "Our food delivery service is simple: choose your favorite dishes from our online menu, add them to your cart, and place your order. You can pay online or in cash upon delivery. Our team will prepare your order with care and deliver it directly to your door.",
  "How does your food delivery service work?": "Just visit our website, browse our extensive menu of dishes, and select what you'd like to order. After you place your order, our kitchen starts preparing it immediately to ensure it arrives fresh and delicious. Our delivery team aims to get your food to you as quickly as possible.",
  "What payment options do you accept?": "We accept a variety of payment options for your convenience, including major credit cards (Visa, MasterCard, American Express), debit cards, and cash on delivery. Some locations also support mobile payment options like Apple Pay and Google Pay.",
  "Do you offer discounts or promotions?": "Yes, we regularly offer discounts and promotions to our valued customers. Be sure to check our website or sign up for our newsletter to stay updated on the latest deals. Plus, first-time customers get a special discount on their first order!",
} 

function Questions() {
	return (
		<div className='wrapper'>
			<div className="questions">
				<h1 className="title">Frequently Asked <span>Questions</span></h1>
				{Object.entries(question).map(([question, answer], index) => (
          <FAQItem key={index}	question={question} answer={answer} />
        ))}
			</div>
		</div>
	)
}

export default Questions