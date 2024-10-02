import {
    GradientButton,
    GradientButtonProps,
    StoryBook,
    useControls,
    useCreateStore,
  } from '@lobehub/ui';
  
  export default () => {
    const store = useCreateStore();
    const control: GradientButtonProps | any = useControls(
      {
        children: 'Get a Demo',
        glow: true,
        size: {
          options: ['large', 'normal', 'small'],
          value: 'large',
        },
      },
      { store },
    );
  
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
        <GradientButton glow={true} size="large" className="bg-slate-900 text-white">
          Get a Demo
        </GradientButton>
      </div>
              
            );
          };
          
   
  