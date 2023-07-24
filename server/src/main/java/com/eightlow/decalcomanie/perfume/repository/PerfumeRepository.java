package com.eightlow.decalcomanie.perfume.repository;

import com.eightlow.decalcomanie.perfume.entity.Perfume;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PerfumeRepository extends JpaRepository<Perfume, Integer> {
    List<Perfume> findAll();

    Perfume findOneByPerfumeId(int perfumeId);

    // 검색 조건에 맞는 향수를 받아오는 메서드
    @Query("SELECT p FROM Perfume p WHERE p.perfumeId IN :perfumeIds AND p.brandId IN :brands AND p.gender = :gender AND p.nameOrg LIKE %:keyword%")
    List<Perfume> findPerfumesByBrandAndGenderAndKeyword(List<Integer> perfumeIds, List<Integer> brands, int gender, String keyword);
}