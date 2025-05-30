import { scrollToContact } from '@/utils/scrollUtils';
import { SectionWrapper } from './SectionWrapper';

const SmartPickupSection = () => {
  return (
    <SectionWrapper
      index={3} // Fourth section (index 3)
      title="استلام ذكي للطلبيات"
      image="/lovable-uploads/7427-smart-pickup.png"
      imageAlt="BMD Smart Pickup"
      ctaText="جرب الخدمة الآن"
      ctaAction={scrollToContact}
      additionalContent={
        <div className="bg-white rounded-3xl p-8 shadow-xl mt-8">
          <h3 className="text-2xl font-bold text-primary mb-6">مميزات الاستلام الذكي</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="bg-blue-100 p-3 rounded-full">
                <i className="fas fa-check text-blue-600"></i>
              </div>
              <div>
                <h4 className="font-bold text-lg text-primary">استلام من أي مكان</h4>
                <p className="text-gray-600">كنجيو نستلمو من عندك فين ما كنتي</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="bg-blue-100 p-3 rounded-full">
                <i className="fas fa-check text-blue-600"></i>
              </div>
              <div>
                <h4 className="font-bold text-lg text-primary">تتبع مباشر</h4>
                <p className="text-gray-600">تتبع الطلبية ديالك لحظة بلحظة</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="bg-blue-100 p-3 rounded-full">
                <i className="fas fa-check text-blue-600"></i>
              </div>
              <div>
                <h4 className="font-bold text-lg text-primary">إشعارات فورية</h4>
                <p className="text-gray-600">إشعارات بكل تغيير في حالة الطلبية</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="bg-blue-100 p-3 rounded-full">
                <i className="fas fa-check text-blue-600"></i>
              </div>
              <div>
                <h4 className="font-bold text-lg text-primary">جدولة مسبقة</h4>
                <p className="text-gray-600">حدد وقت الاستلام اللي كيناسبك</p>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <div>
        <p className="mb-4">
          مع BMD، ماغاديش تضطر تنقل البضائع ديالك للمخزن ديالنا. احنا كنجيو عندك فين ما كنتي.
        </p>
        
        <p className="mb-4">
          كنوفرو خدمة استلام ذكية كتمكنك من تتبع الطلبية ديالك من لحظة الاستلام حتى التوصيل.
        </p>
        
        <p>
          غير حدد الوقت والمكان اللي كيناسبك، واحنا غادي نجيو ناخدو البضائع ديالك بكل احترافية.
        </p>
      </div>
    </SectionWrapper>
  );
};

export { SmartPickupSection };
