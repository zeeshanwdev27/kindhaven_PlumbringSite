import { Phone, Mail, MapPin  } from 'lucide-react';
import { Link } from "react-router-dom";

function TopNavbar() {


  return (
    <div className="py-4 flex gap-10 px-50 items-center bg-gray-100 "  aria-live="polite">
      <div className='flex items-center justify-center gap-1.5'>
        <Phone className='w-3 text-gray-700' strokeWidth={2.5}/>
        <p className='text-sm font-bold text-gray-700'>+1 659 213 5042</p>
      </div>
        <div className='flex items-center justify-center gap-1.5'>
        <Mail className='w-3 text-gray-700' strokeWidth={2.5}/>
        <Link to={"mailto:info@kindhaven.net"} className='underline text-sm font-bold text-gray-700'>info@kindhaven.net</Link>
      </div>
      <div className='flex items-center justify-center gap-1.5'>
        <MapPin className='w-3 text-gray-700' strokeWidth={2.5}/>
        <p className='text-sm font-bold text-gray-700'>3801 DYLAN PL LEXINGTON, KY 40514</p>
      </div>
    </div>
  );
}

export default TopNavbar;