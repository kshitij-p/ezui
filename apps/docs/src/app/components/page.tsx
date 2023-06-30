import DemoAccordion from "@/components/demo/DemoAccordion";
import DemoAlertDialog from "@/components/demo/DemoAlertDialog";
import DemoAspectRatio from "@/components/demo/DemoAspectRatio";
import DemoAutocomplete from "@/components/demo/DemoAutocomplete";
import DemoAvatar from "@/components/demo/DemoAvatar";
import DemoBadge from "@/components/demo/DemoBadge";
import DemoCard from "@/components/demo/DemoCard";
import DemoCheckbox from "@/components/demo/DemoCheckbox";
import DemoCode from "@/components/demo/DemoCode";
import DemoCollapsible from "@/components/demo/DemoCollapsible";
import DemoCommand from "@/components/demo/DemoCommand";
import DemoDialog from "@/components/demo/DemoDialog";
import DemoDropdownMenu from "@/components/demo/DemoDropdownMenu";
import DemoForm from "@/components/demo/DemoForm";
import DemoHoverCard from "@/components/demo/DemoHoverCard";
import DemoInput from "@/components/demo/DemoInput";
import DemoMenubar from "@/components/demo/DemoMenubar";
import DemoNavigationMenu from "@/components/demo/DemoNavigationMenu";
import DemoPopover from "@/components/demo/DemoPopover";
import DemoProgress from "@/components/demo/DemoProgress";
import DemoRadioGroup from "@/components/demo/DemoRadioGroup";
import DemoScrollArea from "@/components/demo/DemoScrollArea";
import DemoSelect from "@/components/demo/DemoSelect";
import DemoSeparator from "@/components/demo/DemoSeparator";
import DemoSheet from "@/components/demo/DemoSheet";
import DemoSkeleton from "@/components/demo/DemoSkeleton";
import DemoSlider from "@/components/demo/DemoSlider";
import DemoSwitch from "@/components/demo/DemoSwitch";
import DemoTable from "@/components/demo/DemoTable";
import DemoTabs from "@/components/demo/DemoTabs";
import DemoToast from "@/components/demo/DemoToast";
import DemoToggle from "@/components/demo/DemoToggle";
import DemoToggleGroup from "@/components/demo/DemoToggleGroup";
import DemoTooltip from "@/components/demo/DemoTooltip";
import DemoTextarea from "@/components/demo/DemoTextarea";

import DemoButton from "@/components/demo/DemoButton";

const page = () => {
  return (
    <div className="flex w-full max-w-max flex-col gap-8">
      <div className="flex flex-wrap gap-8">
        <div className="flex flex-col gap-8">
          <DemoDialog />

          <DemoAlertDialog />
          <DemoSelect />

          <DemoSheet />
        </div>
        <DemoInput />
        <DemoTextarea />
        <DemoButton />
        <DemoBadge />
        <DemoSkeleton />
        <DemoAvatar />
        <DemoSeparator />
        <DemoSwitch />
        <DemoCheckbox />
        <DemoRadioGroup />
        <DemoSlider />
        <DemoProgress />
        <DemoAspectRatio />
        <DemoCode />
        <DemoTable />
        <DemoCard />
        <DemoToggle />
        <DemoToggleGroup />
        <DemoTabs />
        <DemoScrollArea />
        <DemoToast />
        <DemoCollapsible />
        <DemoAccordion />
        <DemoPopover />
        <DemoTooltip />
        <DemoHoverCard />
        <DemoDropdownMenu />
        <DemoNavigationMenu />
        <DemoMenubar />
        <DemoCommand />
        <DemoAutocomplete />
        <DemoForm />
      </div>
    </div>
  );
};

export default page;
