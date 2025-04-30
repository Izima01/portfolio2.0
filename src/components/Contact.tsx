import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (formRef.current != null) {
        const res = await emailjs.sendForm(
          'service_iwts6ot',
          'template_f258tsi',
          formRef.current,
          '5Xi2HXKNgsulYRru4'
        );
        console.log(res);
        if (res.status == 200) {
          toast({
            title: 'Message sent!',
            description:
              "Thank you for your message. I'll get back to you soon.",
          });
        } else {
          toast({
            title: 'Error Occured',
            description:
              'An error occured while sending your data. Please try again later.',
          });
        }
      }

      // }
    } catch (err) {
      // console.error(err);
    } finally {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <section id='contact' className='py-20 bg-secondary/20'>
      <div className='container px-10 xl:max-w-6xl'>
        <h2 className='section-heading text-center mx-auto'>Contact Me</h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Feel free to reach out if you're looking to collaborate, have
          questions, or just want to connect.
        </p>

        <div className='max-w-4xl mx-auto'>
          <div className='grid md:grid-cols-2 gap-12'>
            <form onSubmit={handleSubmit} ref={formRef} className='space-y-4'>
              <div>
                <Input
                  type='text'
                  name='name'
                  placeholder='Your Name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='bg-card border-border'
                />
              </div>

              <div>
                <Input
                  type='email'
                  name='email'
                  placeholder='Your Email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='bg-card border-border'
                />
              </div>

              <div>
                <Textarea
                  name='message'
                  placeholder='Your Message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className='min-h-[120px] bg-card border-border'
                />
              </div>

              <Button type='submit' disabled={isSubmitting} className='w-full'>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>

            {/* <div> */}
            <div className='space-y-6 md:ml-10'>
              <h3 className='text-xl font-bold mb-4'>Get in Touch</h3>

              <div className='flex items-start gap-4 p-2 rounded-md bg-primary/10'>
                <div className='p-3 bg-primary/10 rounded-full text-primary'>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className='font-medium'>Email</h4>
                  <p className='text-muted-foreground'>
                    kingsleyizima@gmail.com
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 p-2 rounded-md bg-primary/10'>
                <div className='p-3 bg-primary/10 rounded-full text-primary'>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className='font-medium'>Phone</h4>
                  <p className='text-muted-foreground'>+234 706 041 2338</p>
                </div>
              </div>

              <div className='flex items-start gap-4 p-2 rounded-md bg-primary/10'>
                <div className='p-3 bg-primary/10 rounded-full text-primary'>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className='font-medium'>Location</h4>
                  <p className='text-muted-foreground'>Lagos, Nigeria</p>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
