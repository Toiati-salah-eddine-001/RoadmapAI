import React from 'react';
import VercelV0Chat from "@/components/mvpblocks/v0-chat";

function Page() {
    return (
        <section 
            className="w-full min-h-screen flex justify-center items-start pt-16 p-4"
            style={{
                background: 'linear-gradient(135deg, #FFFADC 0%, #F9F9F9 100%)',
            }}
        >
            <div className="w-full max-w-4xl">
                <VercelV0Chat/>
            </div>
        </section>
    );
}

export default Page;