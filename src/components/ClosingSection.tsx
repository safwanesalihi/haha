import { scrollToContact } from '@/utils/scrollUtils';
import { SectionWrapper } from './SectionWrapper';

const ClosingSection = () => {
  return (
    <SectionWrapper
      index={8} // Ninth section (index 8)
      title="ابدأ مع BMD اليوم"
      image="/lovable-uploads/13060-closing-section.png"
      imageAlt="BMD Partnership"
      ctaText="تواصل معنا الآن"
      ctaAction={scrollToContact}
      additionalContent={
        <div className="mt-12 bg-white rounded-3xl p-8 shadow-xl" id="contact-form">
          <h3 className="text-2xl font-bold text-primary mb-8">تواصل معنا</h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">الاسم الكامل</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">رقم الهاتف</label>
                <input 
                  type="tel" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="أدخل رقم هاتفك"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">البريد الإلكتروني</label>
              <input 
                type="email" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="أدخل بريدك الإلكتروني"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">رسالتك</label>
              <textarea 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
                placeholder="اكتب رسالتك هنا..."
              ></textarea>
            </div>
            
            <div>
              <button 
                type="submit"
                className="btn-primary w-full text-xl"
              >
                إرسال الطلب
              </button>
            </div>
          </form>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <i className="fas fa-phone text-3xl text-blue-600 mb-4"></i>
              <h4 className="font-bold text-lg text-primary">اتصل بنا</h4>
              <p className="text-gray-600">+212 522 123 456</p>
            </div>
            
            <div className="text-center">
              <i className="fas fa-envelope text-3xl text-blue-600 mb-4"></i>
              <h4 className="font-bold text-lg text-primary">راسلنا</h4>
              <p className="text-gray-600">contact@bmd.ma</p>
            </div>
            
            <div className="text-center">
              <i className="fas fa-map-marker-alt text-3xl text-blue-600 mb-4"></i>
              <h4 className="font-bold text-lg text-primary">زورنا</h4>
              <p className="text-gray-600">الدار البيضاء، المغرب</p>
            </div>
          </div>
        </div>
      }
    >
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
