import { scrollToContact } from '@/utils/scrollUtils';
import { SectionWrapper } from './SectionWrapper';

const VipOfferSection = () => {
  return (
    <SectionWrapper
      index={7} // Eighth section (index 7)
      title="عروض VIP للشركات الكبيرة"
      image="/lovable-uploads/6704-vip-offer.png"
      imageAlt="BMD VIP Offers"
      ctaText="احصل على عرض خاص"
      ctaAction={scrollToContact}
      additionalContent={
        <div className="bg-white rounded-3xl p-8 shadow-xl mt-8">
          <h3 className="text-2xl font-bold text-primary mb-6">مميزات عروض VIP</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="bg-blue-100 p-3 rounded-full">
                <i className="fas fa-star text-blue-600"></i>
              </div>
              <div>
                <h4 className="font-bold text-lg text-primary">أسعار تنافسية</h4>
                <p className="text-gray-600">أسعار خاصة للشركات الكبيرة</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="bg-blue-100 p-3 rounded-full">
                <i className="fas fa-star text-blue-600"></i>
              </div>
              <div>
                <h4 className="font-bold text-lg text-primary">مدير حساب خاص</h4>
                <p className="text-gray-600">مدير حساب مخصص لخدمتك</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="bg-blue-100 p-3 rounded-full">
                <i className="fas fa-star text-blue-600"></i>
              </div>
              <div>
                <h4 className="font-bold text-lg text-primary">أولوية التوصيل</h4>
                <p className="text-gray-600">أولوية في التوصيل والاستلام</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="bg-blue-100 p-3 rounded-full">
                <i className="fas fa-star text-blue-600"></i>
              </div>
              <div>
                <h4 className="font-bold text-lg text-primary">تقارير متقدمة</h4>
                <p className="text-gray-600">تقارير تحليلية متقدمة</p>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <div>
        <p className="mb-4">
          للشركات الكبيرة، كنوفرو عروض VIP خاصة مع مميزات حصرية وأسعار تنافسية.
        </p>
        
        <p className="mb-4">
          كل شركة كتستافد من مدير حساب خاص يتابع معاها كل التفاصيل ويضمن أعلى مستوى من الخدمة.
        </p>
        
        <p>
          تواصل معانا اليوم للحصول على عرض خاص يناسب احتياجات الشركة ديالك.
        </p>
      </div>
    </SectionWrapper>
  );
};

export { VipOfferSection };
