import { scrollToContact } from '@/utils/scrollUtils';
import { SectionWrapper } from './SectionWrapper';

const FastPaymentSection = () => {
  return (
    <SectionWrapper
      index={6} // Seventh section (index 6)
      title="تحصيل سريع للمبالغ"
      image="/lovable-uploads/8303-fast-payment.png"
      imageAlt="BMD Fast Payment"
      ctaText="ابدأ الآن"
      ctaAction={scrollToContact}
      additionalContent={
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="service-card text-center">
            <i className="fas fa-money-bill-wave text-4xl text-blue-600 mb-4"></i>
            <h3 className="text-xl font-bold text-primary mb-2">تحصيل فوري</h3>
            <p className="text-gray-600">تحصيل المبالغ فور التوصيل</p>
          </div>
          
          <div className="service-card text-center">
            <i className="fas fa-chart-line text-4xl text-blue-600 mb-4"></i>
            <h3 className="text-xl font-bold text-primary mb-2">تقارير مفصلة</h3>
            <p className="text-gray-600">تقارير يومية عن المبيعات والتحصيلات</p>
          </div>
          
          <div className="service-card text-center">
            <i className="fas fa-university text-4xl text-blue-600 mb-4"></i>
            <h3 className="text-xl font-bold text-primary mb-2">تحويل بنكي</h3>
            <p className="text-gray-600">تحويل المبالغ للحساب البنكي ديالك</p>
          </div>
        </div>
      }
    >
      <div>
        <p className="mb-4">
          مع BMD، كتقدر تحصل على فلوسك بسرعة وأمان. كنتكلفو بتحصيل المبالغ من الزبناء وتحويلها ليك.
        </p>
        
        <p className="mb-4">
          كنوفرو تقارير مفصلة عن المبيعات والتحصيلات، باش تبقى متتبع لكل درهم.
        </p>
        
        <p>
          اختار طريقة التحصيل اللي كتناسبك: تحويل بنكي، كاش، أو أي طريقة أخرى متاحة.
        </p>
      </div>
    </SectionWrapper>
  );
};

export { FastPaymentSection };
