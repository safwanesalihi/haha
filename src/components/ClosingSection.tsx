import { scrollToContact } from "@/utils/scrollUtils";
import { SectionWrapper } from "./SectionWrapper";

const ClosingSection = () => {
  // This section has index 8, so it will have a white background
  // Use the appropriate button style for white background
  const buttonClass = "btn-on-white"; 
  const inputClass = "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"; // Added text-gray-900 and placeholder color
  const labelClass = "block text-gray-700 mb-2 font-medium"; // Added font-medium

  return (
    <SectionWrapper
      index={8} // Ninth section (index 8)
      title="ابدأ مع BMD اليوم"
      image="/lovable-uploads/13060-closing-section.png" // Assuming path is correct
      imageAlt="BMD Partnership"
      ctaText="تواصل معنا الآن"
      ctaAction={scrollToContact}
      additionalContent={
        <div className="mt-12 bg-white rounded-3xl p-8 shadow-xl w-full max-w-4xl mx-auto" id="contact-form">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">تواصل معنا</h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>الاسم الكامل</label>
                <input 
                  type="text" 
                  className={inputClass}
                  placeholder="أدخل اسمك الكامل"
                  required // Added required attribute
                />
              </div>
              
              <div>
                <label className={labelClass}>رقم الهاتف</label>
                <input 
                  type="tel" 
                  className={inputClass}
                  placeholder="أدخل رقم هاتفك"
                  required // Added required attribute
                />
              </div>
            </div>
            
            <div>
              <label className={labelClass}>البريد الإلكتروني</label>
              <input 
                type="email" 
                className={inputClass}
                placeholder="أدخل بريدك الإلكتروني"
                required // Added required attribute
              />
            </div>
            
            <div>
              <label className={labelClass}>رسالتك</label>
              <textarea 
                className={`${inputClass} h-32`}
                placeholder="اكتب رسالتك هنا..."
                required // Added required attribute
              ></textarea>
            </div>
            
            <div>
              {/* Use the correct button class based on the background */}
              <button 
                type="submit"
                className={`${buttonClass} w-full text-xl`} // Changed from btn-primary
              >
                إرسال الطلب
              </button>
            </div>
          </form>
          
          {/* Contact Info - Enhanced styling */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 border-t border-gray-200 pt-8">
            <div className="text-center flex flex-col items-center">
              {/* Replace Font Awesome with SVG or emoji if needed */}
              <div className="bg-blue-100 p-3 rounded-full mb-3">
                 <span className="text-2xl text-blue-600">📞</span> {/* Emoji placeholder */}
              </div>
              <h4 className="font-bold text-lg text-primary">اتصل بنا</h4>
              <p className="text-gray-600">+212 522 123 456</p>
            </div>
            
            <div className="text-center flex flex-col items-center">
               <div className="bg-blue-100 p-3 rounded-full mb-3">
                 <span className="text-2xl text-blue-600">📧</span> {/* Emoji placeholder */}
              </div>
              <h4 className="font-bold text-lg text-primary">راسلنا</h4>
              <p className="text-gray-600">contact@bmd.ma</p>
            </div>
            
            <div className="text-center flex flex-col items-center">
               <div className="bg-blue-100 p-3 rounded-full mb-3">
                 <span className="text-2xl text-blue-600">📍</span> {/* Emoji placeholder */}
              </div>
              <h4 className="font-bold text-lg text-primary">زورنا</h4>
              <p className="text-gray-600">الدار البيضاء، المغرب</p>
            </div>
          </div>
        </div>
      }
    >
      {/* Main section text */}
      <div>
        <p className="mb-4">
          مع BMD، كتقدر تركز على تطوير البيزنس ديالك وخلي التوصيل علينا.
        </p>
        
        <p className="mb-4">
          أكثر من 900 براند مغربي كيثيقو فينا، وكنفتخرو بخدمتهم بأعلى مستويات الجودة.
        </p>
        
        <p>
          تواصل معانا اليوم وابدأ رحلتك مع أفضل شريك للتوصيل في المغرب.
        </p>
      </div>
    </SectionWrapper>
  );
};

export { ClosingSection };

