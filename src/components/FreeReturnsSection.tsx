import { scrollToContact } from '@/utils/scrollUtils';
import { SectionWrapper } from './SectionWrapper';

const FreeReturnsSection = () => {
  return (
    <SectionWrapper
      index={5} // Sixth section (index 5)
      title="إرجاع مجاني للبضائع"
      image="/lovable-uploads/6991-free-returns.png"
      imageAlt="BMD Free Returns"
      ctaText="تعرف على المزيد"
      ctaAction={scrollToContact}
      additionalContent={
        <div className="bg-white rounded-3xl p-8 shadow-xl mt-8">
          <h3 className="text-2xl font-bold text-primary mb-6">مميزات خدمة الإرجاع</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <i className="fas fa-undo text-4xl text-blue-600 mb-4"></i>
              <h4 className="font-bold text-lg text-primary">إرجاع سريع</h4>
              <p className="text-gray-600">إرجاع البضائع في نفس اليوم</p>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <i className="fas fa-hand-holding-usd text-4xl text-blue-600 mb-4"></i>
              <h4 className="font-bold text-lg text-primary">استرداد فوري</h4>
              <p className="text-gray-600">استرداد المبلغ فور استلام المرتجع</p>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <i className="fas fa-exchange-alt text-4xl text-blue-600 mb-4"></i>
              <h4 className="font-bold text-lg text-primary">تبديل سهل</h4>
              <p className="text-gray-600">إمكانية تبديل المنتج بدل الإرجاع</p>
            </div>
          </div>
        </div>
      }
    >
      <div>
        <p className="mb-4">
          مع BMD، كنوفرو ليك خدمة إرجاع مجانية للبضائع، بدون أي تكاليف إضافية.
        </p>
        
        <p className="mb-4">
          كنفهمو أن الزبون ممكن يغير رأيو، ولهذا كنسهلو عملية الإرجاع باش تحافظ على ثقة الزبناء ديالك.
        </p>
        
        <p>
          كنتكلفو بكلشي: من استلام المنتوج من عند الزبون، حتى إرجاعو للمخزن ديالك، وتحديث المخزون ديالك.
        </p>
      </div>
    </SectionWrapper>
  );
};

export { FreeReturnsSection };
