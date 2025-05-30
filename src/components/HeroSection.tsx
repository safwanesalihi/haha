import { scrollToContact } from '@/utils/scrollUtils';
import { SectionWrapper } from './SectionWrapper';

const HeroSection = () => {
  return (
    <SectionWrapper
      index={0} // First section (index 0)
      title="شريكك في التوصيل"
      image="/lovable-uploads/92432ce1-6d9d-4ffb-b7b4-f14dca98a788.png"
      imageAlt="BMD Delivery Team"
      ctaText="ابدأ الآن"
      ctaAction={scrollToContact}
      additionalContent={
        <div className="grid grid-cols-3 gap-8 pt-12">
          <div className="text-center">
            <div className="animated-counter">900+</div>
            <p className="font-medium">براند مغربي</p>
          </div>
          <div className="text-center">
            <div className="animated-counter">5+</div>
            <p className="font-medium">سنوات خبرة</p>
          </div>
          <div className="text-center">
            <div className="animated-counter">12</div>
            <p className="font-medium">ساعة توصيل</p>
          </div>
        </div>
      }
    >
      <div>
        <div className="inline-block mb-6">
          <img 
            src="/lovable-uploads/8c72fa9f-b89f-4f24-b01b-26af98158e11.png" 
            alt="BMD Logo"
            className="h-20 md:h-24 lg:h-28 mx-auto mb-4"
          />
          <div className="h-2 w-32 bg-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <p className="text-2xl md:text-3xl font-medium mb-6">
          خدمة مجربة، ونتائج ملموسة كتشهد لينا
        </p>
        
        <p className="text-lg md:text-xl leading-relaxed">
          منذ أكثر من 5 سنين، BMD قلبات موازين التوصيل فالمغرب. السرعة، الدقة، والراحة هما شعارنا. 
          كنخدمو أكثر من 900 براند مغربية من كازا حتى لأقصى نقطة فالمملكة بخدمة احترافية كتخلي الزبناء ديالك فرحانين وراجعين.
        </p>
      </div>
    </SectionWrapper>
  );
};

export { HeroSection };
