"use client";

import React from "react";
import {
    InteractiveTabs,
    createLocationTab,
    createScheduleTab,
    createContactTab,
    createSocialTab,
    XIcon
} from '@/components/InteractiveTabs';
import { PageContainer, PageHeader } from "@/components/PageHeader";

const exampleTabs = [
    createContactTab({
        phone: "+1-780-777-7321",
        phoneDisplay: "(780) 777-7321",
        email: "procooho@gmail.com",
    }),
    createLocationTab(
        {
            street: "110 Edgar Lane",
            city: "Sherwood Park, AB",
            get mapUrl() {
                const fullAddress = `${this.street}, ${this.city}, Canada`;
                const encodedAddress = encodeURIComponent(fullAddress);
                return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedAddress}`;
            },
            get mapSearchUrl() {
                const fullAddress = `${this.street}, ${this.city}, Canada`;
                const encodedAddress = encodeURIComponent(fullAddress);
                return `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
            }
        },
    ),

];

export default function Contact() {
    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-3">
            <div className="mx-auto space-y-8">
                <PageContainer>
                    <PageHeader
                        title="Contact"
                        subtitle="My Contact Information"
                    />

                    <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-xl">
                        <InteractiveTabs
                            tabs={exampleTabs}
                            colorVariant="blue"
                            borderColor="blue"
                            minContentHeight="200px"
                        />
                    </div>
                </PageContainer>
            </div>
        </main>
    );
}
