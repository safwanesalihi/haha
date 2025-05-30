import { scrollToContact } from '@/utils/scrollUtils';
import { SectionWrapper } from './SectionWrapper';

const CompleteServiceSection = () => {
  return (
    <SectionWrapper
      index={2} // Third section (index 2)
      title="خدمة شاملة من الألف للياء"
      image="/lovable-uploads/e1c5c5a9-5e3a-4c5e-9c1a-b5e0e0e0e0e0.png"
      imageAlt="BMD Complete Service"
      ctaText="تواصل معنا الآن"
      ctaAction={scrollToContact}
      additionalContent={
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="service-card text-center">
            <i className="fas fa-box-open text-4xl text-blue-600 mb-4"></i>
            <h3 className="text-xl font-bold text-primary mb-2">استلام البضائع</h3>
            <p className="text-gray-600">كنجيو عندك للمخزن أو المعمل ديالك باش ناخدو البضائع</p>
          </div>
          
          <div className="service-card text-center">
            <i className="fas fa-warehouse text-4xl text-blue-600 mb-4"></i>
            <h3 className="text-xl font-bold text-primary mb-2">تخزين مجاني</h3>
            <p className="text-gray-600">كنخزنو البضائع ديالك بالمجان حتى 30 يوم</p>
          </div>
          
          <div className="service-card text-center">
            <i className="fas fa-truck text-4xl text-blue-600 mb-4"></i>
            <h3 className="text-xl font-bold text-primary mb-2">توصيل سريع</h3>
            <p className="text-gray-600">كنوصلو للزبون ديالك فأقل من 24 ساعة</p>
          </div>
        </div>
      }
    >
      <div>
        <p className="mb-4">
          فريق BMD كيقدم ليك خدمة متكاملة من لحظة استلام المنتوج حتى توصيلو للزبون ديالك.
        </p>
        
        <p className="mb-4">
          ماعندكش ماتخاف على المنتوج ديالك، راه فيدين أمينة من اللحظة اللي كتسلمو لينا حتى كيوصل للزبون.
        </p>
        
        <p>
          كنتكلفو بكلشي: الاستلام، التخزين، التغليف، التوصيل، والتحصيل. غير ركز على البيزنس ديالك وخلي التوصيل علينا.
        </p>
      </div>
    </SectionWrapper>
  );
};

export { CompleteServiceSection };
