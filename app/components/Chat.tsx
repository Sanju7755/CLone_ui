import {
    ActionIconGroup,
    ChatItem,
    ChatItemProps,
    useControls,
    useCreateStore,
  } from '@lobehub/ui';
  import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
  
  import { avatar, dropdownMenu, items } from '../../public/data';
  
  export default () => {
    // Store for first chat item
    const store1 = useCreateStore();
    const control1: ChatItemProps | any = useControls(
      {
        aboveMessage: '',
        belowMessage: '',
        loading: false,
        message: {
          rows: true,
          value:
            "🚀 Explore the rich ecosystem of intelligent assistants and easily orchestrate your ideal workflow, you’ll do amazing things with LobeChat.",
        },
        placement: {
          options: ['left', 'right'],
          value: 'left',
        },
        primary: false,
        showTitle: false,
        time: 1_686_538_950_084,
        type: {
          options: ['block', 'pure'],
          value: 'block',
        },
      },
      { store: store1 }
    );
  
    // Store for second chat item
    const store2 = useCreateStore();
    const control2: ChatItemProps | any = useControls(
      {
        aboveMessage: '',
        belowMessage: '',
        loading: false,
        message: {
          rows: true,
  
          value:
            'Whether for users or developers, LobeChat aims to become the AI playground for everyone.👇✨',
        },
        placement: {
          options: ['left', 'right'],
          value: 'left',
        },
        primary: false,
        showTitle: false,
        time: 1_686_538_950_085,
        type: {
          options: ['block', 'pure'],
          value: 'block',
        },
      },
      { store: store2 }
    );
  
    return (
      <div className="bg-black px-8 py-4 space-y-4">
        {/* First Chat Item */}
        <ChatItem
          {...control1}
          className="bg-darkslategray text-lightslategrey"
          actions={<ActionIconGroup type="ghost" />}
          avatar={avatar}
        />
  
        {/* Second Chat Item */}
        <ChatItem
          {...control2}
          className="bg-darkslategray text-lightslategrey"
          actions={<ActionIconGroup type="ghost" />}
          avatar={avatar}
        />
      </div>
    );
  };
  