import * as Slider from '@radix-ui/react-slider';
import { useSliderContext } from '../../utils/sliderContext';


export default function SalarySlider() {
	const marks = [0, 2000, 4000, 6000, 8000, 10000];
	const { stipendValue, setStipendValue } = useSliderContext();
	console.log('stipendValue', stipendValue);
	

	return (
		<div className="w-full max-w-md px-4 py-6">
			<p className="mb-3">Desired minimum monthly stipend (₹)</p>

			<Slider.Root
				className="relative flex items-center select-none touch-none w-full h-6"
				value={stipendValue}
				onValueChange={setStipendValue}
				max={10000}
				step={2000}
			>
				<Slider.Track className="bg-blue-200 relative grow rounded-full h-1.5">
					<Slider.Range className="absolute bg-blue-500 rounded-full h-full" />
				</Slider.Track>
				<Slider.Thumb
					className="block w-5 h-5 bg-white border-[3px] border-blue-500 rounded-full shadow hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
					aria-label="Salary"
				/>
			</Slider.Root>

			<div className="flex justify-between mt-2 text-sm text-gray-500 font-medium">
				{marks.map((mark, idx) => (
					<span key={idx} className={`${mark === stipendValue[0] ?'text-gray-600':'text-gray-400'}`}>{mark === 0 ? '0' : `${mark / 1000}K`}</span>
				))}
			</div>
		</div>
	);
}
