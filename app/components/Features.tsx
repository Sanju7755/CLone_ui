import React from 'react'
import Dropdown from '../../components/Dropdown'
const Features = () => {
    

  return (
    <div className="flex flex-col lg:flex-row bg-black text-white px-20 space-x-12">
        <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <p>If your question is not answered, you can refer to the <span className="text-[#8ae8ff]">product documentation</span> for more common questions. Feel free to contact us.</p>
            <div className="flex flex-row space-x-3 mt-3 ">
                <button className="bg-black text-white font-semibold text-[16px] border-slate-700 hover:border-white border-[0.01px] rounded-md px-3 py-2">
                   <div className="flex flex-row items-center align-center space-x-2">
                   <span >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="transparent" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path></svg>
                    </span> <span>Community Support</span>
                    </div> 
                    
                </button>

                <button className="bg-black text-white font-semibold text-[16px]
                border-slate-700 hover:border-white border-[0.01px] rounded-md px-3 py-2">
                   <div className="flex flex-row items-center align-center space-x-2">
                   <span >
                   <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="transparent" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    </span> <span>Email Support</span>
                    </div> 
                    
                </button>

            </div>

        </div>
        <div className="space-y-4 mt-4">
        <Dropdown title="Can LobeChat be used for free?">
          <p>
            LobeChat always adheres to the open-source concept. For professional developers, you can use all open-source capabilities through self-deploying the community edition. In the LobeChat Cloud version, we provide 450,000 free calculating credits for all registered users, ready to use without complex configurations. If you need more usage, you can subscribe to Starter, Premium, or Ultimate.
          </p>
        </Dropdown>

        <Dropdown title="What are calculating credits?">
          <p>
            Calculating credits are the units used to process tasks or requests within LobeChat. You are allotted a certain number of credits, and once used, you may need to buy more or upgrade your subscription for additional credits.
          </p>
        </Dropdown>

        <Dropdown title="What to do if calculating credits are insufficient?">
          <p>
            If you run out of calculating credits, you can either wait for a monthly renewal or upgrade your plan to access more credits.
          </p>
        </Dropdown>

        <Dropdown title="How to change or cancel a subscription plan?">
          <p>
            You can change or cancel your subscription plan by going to your account settings, selecting the subscription section, and choosing your desired option.
          </p>
        </Dropdown>

        <Dropdown title="How is vector storage calculated?">
          <p>
            Vector storage is calculated based on the size and number of vectors you store. You can monitor your usage through your account dashboard.
          </p>
        </Dropdown>
      </div>
    </div>
  )
}

export default Features