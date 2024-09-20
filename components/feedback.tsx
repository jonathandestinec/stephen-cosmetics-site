import { Star } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const feedbacks = [
  {
    id: 1,
    name: 'Alice Johnson',
    avatar: '/placeholder-user.jpg',
    rating: 5,
    comment: 'Absolutely love the products! The skincare line has done wonders for my complexion.'
  },
  {
    id: 2,
    name: 'Bob Smith',
    avatar: '/placeholder-user.jpg',
    rating: 4,
    comment: 'Great customer service and fast shipping. Will definitely order again.'
  },
  {
    id: 3,
    name: 'Carol White',
    avatar: '/placeholder-user.jpg',
    rating: 5,
    comment: 'The makeup products are top-notch. Long-lasting and beautiful colors!'
  }
]

export default function UserFeedback() {
  return (
    <section className="bg-white py-12 px-16 sm:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">What Our Customers Say</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarImage src={feedback.avatar} alt={feedback.name} />
                  <AvatarFallback>{feedback.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{feedback.name}</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < feedback.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{feedback.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}