import { Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { ForwardedRef, forwardRef } from "react";

export const TestimonialSection = forwardRef( (props, ref: ForwardedRef<HTMLElement>) => {
    const t = useTranslations();

    return (
        <section className={`py-24 bg-main`} ref={ref}>
            <div className="max-w-4xl mx-auto px-4 text-center">
                <div className="mb-8">
                    <div className="flex justify-center gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map(s => <Star key={s}
                                                        className="w-6 h-6 text-yellow-400 fill-yellow-400"/>)}
                    </div>
                    <h3 className={`text-2xl sm:text-3xl font-medium leading-relaxed italic text-main`}>
                        &ldquo;{t('testimonial.quote')}&rdquo;
                    </h3>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <div
                        className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-xl">
                        {t('testimonial.author').charAt(0)}
                    </div>
                    <div className="text-left">
                        <p className={`font-bold text-main`}>{t('testimonial.author')}</p>
                        <p className={`text-sm text-muted`}>{t('testimonial.role')}</p>
                    </div>
                </div>
            </div>
        </section>
    )
});

TestimonialSection.displayName = "TestimonialSection";