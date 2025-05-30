import { scrollToContact } from '@/utils/scrollUtils';
import { SectionWrapper } from './SectionWrapper';

const FreeStorageSection = () => {
  return (
    <SectionWrapper
      index={4} // Fifth section (index 4)
      title="تخزين مجاني حتى 30 يوم"
      image="/lovable-uploads/5953-free-storage.png"
      imageAlt="BMD Free Storage"
      ctaText="استفد من العرض الآن"
      ctaAction={scrollToContact}
      additionalContent={
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="service-card text-center">
            <i className="fas fa-warehouse text-4xl text-blue-600 mb-4"></i>
            <h3 className="text-xl font-bold text-primary mb-2">مخازن آمنة</h3>
            <p className="text-gray-600">مخازن مؤمنة ومراقبة على مدار الساعة</p>
          </div>
          
          <div className="service-card text-center">
            <i className="fas fa-temperature-low text-4xl text-blue-600 mb-4"></i>
            <h3 className="text-xl font-bold text-primary mb-2">تحكم في درجة الحرارة</h3>
            <p className="text-gray-600">مخازن مكيفة للحفاظ على جودة المنتجات</p>
          </div>
          
          <div className="service-card text-center">
            <i className="fas fa-shield-alt text-4xl text-blue-600 mb-4"></i>
            <h3 className="text-xl font-bold text-primary mb-2">تأمين شامل</h3>
            <p className="text-gray-600">تأمين على جميع البضائع المخزنة</p>
          </div>
        </div>
      }
    >
      <div>
        <p className="mb-4">
          مع BMD، كنوفرو ليك تخزين مجاني للبضائع ديالك حتى 30 يوم، بدون أي تكاليف إضافية.
        </p>
        
        <p className="mb-4">
          المخازن ديالنا مؤمنة ومجهزة بأحدث التقنيات للحفاظ على جودة المنتجات ديالك.
        </p>
        
        <p>
          ماعندكش مشكل المساحة؟ احنا كنحلوها ليك. ركز على تنمية البيزنس ديالك وخلي التخزين علينا.
        </p>
      </div>
    </SectionWrapper>
  );
};

export { FreeStorageSection };
