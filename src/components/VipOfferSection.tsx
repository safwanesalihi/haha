import { scrollToContact } from '@/utils/scrollUtils';
import { SectionWrapper } from './SectionWrapper';

const VipOfferSection = () => {
  // Define gold color classes for consistency
  const goldText = 'text-amber-600'; // Use amber for a richer gold
  const goldBgLight = 'bg-amber-100';
  const goldIcon = 'text-amber-500';
  const goldBorder = 'border-amber-300';

  return (
    <SectionWrapper
      index={7} // Eighth section (index 7) - This is a white background section
      title="عروض VIP للشركات الكبيرة"
      image="/lovable-uploads/6704-vip-offer.png" // Assuming this image path is correct
      imageAlt="BMD VIP Offers"
      ctaText="احصل على عرض خاص"
      ctaAction={scrollToContact}
      additionalContent={
        // Use a slightly different background for the card to stand out, maybe light gold/beige
        <div className={`bg-amber-50 rounded-3xl p-8 shadow-xl mt-8 border ${goldBorder}`}>
          <h3 className={`text-2xl font-bold ${goldText} mb-6`}>مميزات عروض VIP الذهبية</h3> {/* Added 'Golden' */} 
          <div className="grid md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className={`${goldBgLight} p-3 rounded-full`}>
                {/* Replace Font Awesome with a suitable icon if not globally available, or use SVG/emoji */}
                <span className={`text-xl ${goldIcon}`}>⭐</span> {/* Using emoji as placeholder */}
              </div>
              <div>
                <h4 className={`font-bold text-lg ${goldText}`}>أسعار تنافسية ذهبية</h4>
                <p className="text-gray-700">أسعار خاصة للشركات الكبيرة</p> {/* Keep text readable */}
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className={`${goldBgLight} p-3 rounded-full`}>
                 <span className={`text-xl ${goldIcon}`}>👑</span> {/* Using emoji as placeholder */}
              </div>
              <div>
                <h4 className={`font-bold text-lg ${goldText}`}>مدير حساب خاص VIP</h4>
                <p className="text-gray-700">مدير حساب مخصص لخدمتك</p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className={`${goldBgLight} p-3 rounded-full`}>
                 <span className={`text-xl ${goldIcon}`}>🚀</span> {/* Using emoji as placeholder */}
              </div>
              <div>
                <h4 className={`font-bold text-lg ${goldText}`}>أولوية التوصيل الذهبية</h4>
                <p className="text-gray-700">أولوية في التوصيل والاستلام</p>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className={`${goldBgLight} p-3 rounded-full`}>
                 <span className={`text-xl ${goldIcon}`}>📊</span> {/* Using emoji as placeholder */}
              </div>
              <div>
                <h4 className={`font-bold text-lg ${goldText}`}>تقارير ذهبية متقدمة</h4>
                <p className="text-gray-700">تقارير تحليلية متقدمة</p>
              </div>
            </div>
          </div>
        </div>
      }
    >
      {/* Main section text - keep readable */}
      <div>
        <p className="mb-4">
          للشركات الكبيرة، كنوفرو عروض VIP <span className={goldText}>ذهبية</span> خاصة مع مميزات حصرية وأسعار تنافسية.
        </p>
        
        <p className="mb-4">
          كل شركة كتستافد من مدير حساب خاص يتابع معاها كل التفاصيل ويضمن أعلى مستوى من الخدمة.
        </p>
        
        <p>
          تواصل معانا اليوم للحصول على عرض <span className={goldText}>ذهبي</span> خاص يناسب احتياجات الشركة ديالك.
        </p>
      </div>
    </SectionWrapper>
  );
};

export { VipOfferSection };

