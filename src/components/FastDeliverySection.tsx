import { scrollToContact } from '@/utils/scrollUtils';
import { SectionWrapper } from './SectionWrapper';

const FastDeliverySection = () => {
  return (
    <SectionWrapper
      index={1} // Second section (index 1)
      title="توصيل سريع : أقل من 12 ساعة ف المدن الكبيرة!"
      image="/lovable-uploads/66b37649-524c-4c0f-bd1d-da52abb2673e.png"
      imageAlt="BMD Fast Delivery"
      ctaText="اطلب الخدمة الآن"
      ctaAction={scrollToContact}
      additionalContent={
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-primary mb-8">مواقيت التوصيل</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-lg font-medium text-primary">ساعة للمدن الكبيرة</div>
              <div className="text-sm text-gray-600 mt-2">كازا، الرباط، مراكش، فاس</div>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">24</div>
              <div className="text-lg font-medium text-primary">ساعة للمناطق الأخرى</div>
              <div className="text-sm text-gray-600 mt-2">جميع أنحاء المملكة</div>
            </div>
          </div>
        </div>
      }
    >
      <div>
        <div className="text-2xl md:text-3xl font-medium mb-4">
          أقل من 12 ساعة ف: كازا، الرباط، مراكش، فاس…
        </div>
        
        <div className="text-xl mb-4">
          أقل من 24 ساعة ف جميع المناطق الأخرى
        </div>
        
        <p className="text-lg leading-relaxed">
          كنتواجدو فـ كازا و عندنا فروع ف جميع المدن المغربية لتغطية شاملة و فعالة.
        </p>
      </div>
    </SectionWrapper>
  );
};

export { FastDeliverySection };
