import InterviewCard from '@/components/InterviewCard';
import { Button } from '@/components/ui/button';
import { dummyInterviews } from '@/constants';
import {
  getCurrentUser,
  getInterviewsByUserId,
  getLatestInterviews,
} from '@/lib/actions/auth.action';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Page = async () => {
  const user = await getCurrentUser();
  const [userInterviews, latestInterviews] = await Promise.all([
    await getInterviewsByUserId(user?.id!),
    await getLatestInterviews({ userId: user?.id! }),
  ]);

  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcommingInterviews = latestInterviews?.length > 0;

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Pergatit intervisten e punes me Inteligjence Artificiale</h2>
          <p className="text-lg">
            Praktikohu me pyetje te verteta dhe merr vleresimin e duhur
          </p>
          <Button asChild className="btn-primary max-sm:w-full ">
            <Link href="/interview">Fillo Intervisten</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>
      <section className="flex flex-col gap-6 mt-8 ">
        <h2>Intervistat e tua.</h2>
        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>Nuk ke bere ende asnje interviste</p>
          )}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8 ">
        <h2>Bej nje interviste</h2>
        <div className="interviews-section">
          {hasUpcommingInterviews ? (
            latestInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>Nuk ka intervista te vlefshme per momentin.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Page;
